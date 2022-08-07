import { useContext, useEffect, useState } from 'react';

import { styled, Box, Typography } from "@mui/material";

import { UserContext } from '../../../context/UserProvider';
import { AccountContext } from '../../../context/AccountProvider';

import { setConversation, getConversation } from '../../../service/api';
import { emptyProfilePicture } from '../../../constants/data';
import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    height: 40px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
`;

const Conversation = ({ user }) => {
    const url = user.picture || emptyProfilePicture;
    
    const { setPerson } = useContext(UserContext);
    const { account, newMessageFlag }  = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async() => {
            console.log(account, user);
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            console.log(data);
            setMessage({ text: data.message, timestamp: data.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    const getUser = async () => {
        setPerson(user);
        console.log(account, user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={url} alt="display picture" />
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{user.name}</Typography>
                    { 
                        message.text && 
                        <Timestamp>{formatDate(message.timestamp)}</Timestamp>        
                    }
                </Container>
                <Box>
                    <Text>{message.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation;