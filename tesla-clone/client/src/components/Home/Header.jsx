
import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
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
            paddingTop: [3, '!important']
        },
        [theme.breakpoints.down('md')]: {
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
        }
    },
    menu: {
        margin: '0 30px 3px 10px'
    }
}))

const Header = () => {
    const logo = 'https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg';
    const classes = useStyles();
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
                <ListItem>Account</ListItem>
            </List>
            <Menu className={classes.menu} />
        </Box>
    )
}

export default Header;