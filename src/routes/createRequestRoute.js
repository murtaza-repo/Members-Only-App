import * as admin from 'firebase-admin';
import { createJoinRequest } from '../db';

export const createRequestRoute = {
    method: 'post',
    path: '/groups/:id/requests',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;
        
        const user = await admin.auth().verifyIdToken(token);

        if(!token || !user){
            res.status(401).json({message: "Must be logged in to submit requests"})
        }

        await createJoinRequest(id, user.uid);

        res.status(200).json({message: "Success"})
    }
}