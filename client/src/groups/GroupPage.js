import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { MessagesList } from "../messages";
import { RequestsList } from "../requests";
import { useUser } from './../auth/useUser';
import { useProtectedResource } from './../data/useProtectedResource';
import { postWithCredentials } from './../data/postWithCredentials';


export const GroupPage = () => {
    const [messageValue, setMessageValue] = useState('');
    const { id } = useParams();
    const { user } = useUser();
    const { data: group, setData: setGroup} = 
        useProtectedResource(`/groups/${id}`,{
            owner: {},
            messages: [],
            requests: []
        });

    const acceptRequest = async (requestId) => {
        const response = await postWithCredentials(`/groups/${id}/requests/${requestId}/accept`);
        const updatedRequests = await response.json();
        setGroup({
            ...group,
            requests: updatedRequests,
        });
    }

    const rejectRequest = async (requestId) => {
        const response = await postWithCredentials(`/groups/${id}/requests/${requestId}/reject`);
        const updatedRequests = await response.json();
        setGroup({
            ...group,
            requests: updatedRequests,
        });
    }

    const postMessage = async () => {
        const response = await postWithCredentials(`/groups/${id}/messages`, { text: messageValue });
        const updatedMessages = await response.json();
        setGroup({
            ...group,
            messages: updatedMessages,
        });
        setMessageValue('');
    }

    return (
        <div className="centered-container">
            <h1>{group.name}</h1>
            <p>Owned by: {group.owner.fullName}</p>
            <MessagesList messages={group.messages} />
            <div className="new-message-form">
                <input 
                    type="text" 
                    placeholder="Message"
                    value={messageValue}
                    onChange={e => setMessageValue(e.target.value)}
                />
                <button onClick={postMessage}>Send</button>
            </div>
            {
                group.ownerId === user.uid ?
                    <RequestsList 
                        requests={group.requests} 
                        onAccept={acceptRequest}
                        onReject={rejectRequest}
                    />
                : null
            }
        </div>
    )
}