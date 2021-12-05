import { useState } from 'react';
import { Box, List, ListItem, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

//components
import DrawerMenu from './DrawerMenu';

const theme = createTheme();

const useStyles = makeStyles({
    component: {
        height: 60,
        position: 'fixed',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        width: '100%'
    },
    logo: {
        height: 30,
        width: 120
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        '&  > *': {
            fontWeight: 500,
            color: '#181b21',
            width: ['unset', '!important'],
            paddingTop: [3, '!important'],
            cursor: 'pointer',
        },
        '& :hover': {
            background: '#d0d1d2',
            borderRadius: 10,
            transition: 'transform .5s ease-in-out .5s,opacity'
        },
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        }
    },
    rightList: {
        display: 'flex',
        '&  > *': {
            fontWeight: 500,
            color: '#181b21',
            width: ['unset', '!important'],
            paddingTop: [3, '!important']
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: ['auto', '!important']
        }
    },
    menu: {
        margin: '0 30px 3px 10px'
    }
})

const Header = () => {
    const logo = 'https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg';
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(open => !open);
    };

    return (
        <Box className={classes.component}>
            <Box>
                <img src={logo} alt="logo" className={classes.logo} />
            </Box>
            <List className={classes.list}>
                <ListItem>Model S</ListItem>
                <ListItem>Model 3</ListItem>
                <ListItem>Model X</ListItem>
                <ListItem>Model Y</ListItem>
                <ListItem>Solar Roof</ListItem>
                <ListItem>Solar Panels</ListItem>
            </List>
            <List className={classes.rightList}>
                <ListItem>Shop</ListItem>
                <ListItem><Link to="/login">Account</Link></ListItem>
            </List>
            <Menu onClick={toggleDrawer} className={classes.menu} />
            <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
        </Box>
    )
}

export default Header;