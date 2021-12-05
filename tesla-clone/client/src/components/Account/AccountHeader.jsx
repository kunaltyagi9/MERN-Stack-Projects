
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Language } from '@mui/icons-material';

const useStyles = makeStyles({
    component: {
        height: '100vh',
    },
    headerContainer: {
        height: 60,
        display: 'flex',
        padding: '0 15px',  
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 100
    },
    logo: {
        height: 30,
        width: 120
    },
    language: {
        marginLeft: 'auto',
        display: 'flex',
        marginRight: 40
    }
})

const Account = () => {
    const logo = 'https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg';
    const classes = useStyles();
    return (
        <>
            <Box className={classes.headerContainer}>
                <img src={logo} alt="logo" className={classes.logo} />
                <Box className={classes.language}>
                    <Language />
                    <Typography>en-US</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Account;