import { useContext, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { UserContext } from '../../../context/UserProvider';
import { getConversation, newMessages } from '../../../service/api';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const ChatBox = () => {
    const { person, setPerson } = useContext(UserContext);

    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation(person.googleId);
            console.log(data)
            setConversation(data);
        }
        getConversationDetails();
    }, [person.googleId]);

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;