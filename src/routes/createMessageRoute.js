import {getGroup, addMessageToGroup, getMessagesForGroup} from '../db';
import * as admin from 'firebase-admin';

export const createMessageRoute = {
    method: 'post',
    path: '/groups/:id/messages',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;
        const { text } = req.body;
        
        const user = await admin.auth().verifyIdToken(token);
        const group = await getGroup(id);

        if(!user || !group.members.includes(user.uid)){
            return res.status(401).json({message:"User is not authorize to post messages in this group"});

        }

        await addMessageToGroup(id, user.uid, text);
        const updatedMessages = await getMessagesForGroup(id);

        res.status(200).json(updatedMessages);
    }
}