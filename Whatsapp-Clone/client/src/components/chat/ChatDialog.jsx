import { useContext } from 'react';
import { Dialog, makeStyles, withStyles, Box } from '@material-ui/core';

import { UserContext } from '../../context/UserProvider';

//components
import Menu from './menu/Menu';
import ChatBox from './chat/ChatBox';
import EmptyChat from './chat/EmptyChat';

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        width: '70%',
        minWidth: 300,
        height: '100%',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
    }
})

const style = {
    dialogPaper: {
        height: '95%',
        width: '91%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};

const ChatDialog = ({ classes }) => {
    const classname = useStyles();

    const { person } = useContext(UserContext);
    
    return (
        <Dialog 
            open={true} 
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>
                <Box className={classname.rightComponent}>
                    {
                        Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatDialog);