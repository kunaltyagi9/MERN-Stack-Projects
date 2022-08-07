import { useContext, useEffect, useState } from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";

import { UserContext } from '../../../context/UserProvider';
import { AccountContext } from '../../../context/AccountProvider';

import { setConversation, getConversation } from '../../../service/api';
import { emptyProfilePicture } from '../../../constants/data';
import { formatDate } from '../../../utils/common-utils';

const useStyles = makeStyles({
    component: {
        height: 40,
        display: 'flex',
        padding: '13px 0',
        cursor: 'pointer'
    },
    displayPicture: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 14px'
    },
    container: {
        display: 'flex'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#00000099',
        marginRight: 20
    },
    text: {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    }
})

const Conversation = ({ user }) => {
    const classes = useStyles();
    const url = user.picture || emptyProfilePicture;
    
    const { setPerson } = useContext(UserContext);
    const { account, socket, newMessageFlag }  = useContext(AccountContext);

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
        <Box className={classes.component} onClick={() => getUser()}>
            <Box>
                <img src={url} alt="display picture" className={classes.displayPicture} />
            </Box>
            <Box style={{width: '100%'}}>
                <Box className={classes.container}>
                    <Typography>{user.name}</Typography>
                    { 
                        message.text && 
                        <Typography className={classes.timestamp}>
                            {formatDate(message.timestamp)}
                        </Typography>        
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation;