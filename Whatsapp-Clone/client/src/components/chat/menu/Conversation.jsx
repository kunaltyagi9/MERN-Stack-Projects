import { useContext } from 'react'
import { makeStyles, Box } from "@material-ui/core";

import { UserContext } from '../../../context/UserProvider';
import { AccountContext } from '../../../context/AccountProvider';

import { setConversation } from '../../../service/api';

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
    }
})

const Conversation = ({ user }) => {
    const classes = useStyles();
    const url = user.imageUrl || 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';
    
    const { setPerson } = useContext(UserContext);
    const { account }  = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.googleId, receiverId: user.googleId });
    }

    return (
        <Box className={classes.component} onClick={() => getUser()}>
            <Box>
                <img src={url} alt="display picture" className={classes.displayPicture} />
            </Box>
            <Box style={{fontSize: 17}}>
                {user.name}
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default Conversation;