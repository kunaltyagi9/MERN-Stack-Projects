import { useState, useContext } from 'react';
import { MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';

import { GoogleLogout } from 'react-google-login';
import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';

import { clientId } from '../../../constants/data';

const useStyle = makeStyles({
    menuItem: {
        fontSize: 12,
        padding: '0px 40px 0px 20px'
    }
})

const HeaderMenu = () => {
    const classes = useStyle();
    
    const [open, setOpen] = useState(false);
    
    const { setAccount, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowlogoutButton(false);
        setShowloginButton(true);
        setAccount('');
        setPerson({});
    };


    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => { handleClose(); }}>
                { showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
                </MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu;
