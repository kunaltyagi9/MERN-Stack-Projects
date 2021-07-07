import { useState, useEffect, useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { makeStyles, Typography, List, ListItem, Box, withStyles } from '@material-ui/core';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';

const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: 60,
    },
    qr: {
        padding: '40px 40px 0 0',
        height: 285,
        width: 285
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        color: '#525252',
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};

const LoginDialog = ({ classes }) => {
    const classname = useStyle();
    const clientId = '1051426514050-dv0o9fu9umand32ov9iqcamvuf9gttta.apps.googleusercontent.com';

    const [open, setOpen] = useState(false);

    const { account, setAccount,showloginButton, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setAccount(res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    useEffect(() => {
        setOpen(true);
    }, [])

    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose}
            open={true}
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box>
                    <img src={url} alt="QR" className={classname.qr} />
                </Box>
            </Box>
            <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText=""
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText=""
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        </Dialog>
    )
}

export default withStyles(style)(LoginDialog);