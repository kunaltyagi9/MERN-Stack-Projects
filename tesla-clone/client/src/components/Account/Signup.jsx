
import { Typography, Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

//components
import AccountHeader from './AccountHeader';

const useStyles = makeStyles({
    container: {
        marginTop: 60,
        width: 380,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '25px 0 0 30px',
        display: 'flex',
        flexDirection: 'column'
    },
    signin: {
        fontSize: [34, '!important'],
        lineHeight: ['45px', '!important'],
        marginBottom: [10, '!important']
    },
    wrapper: {
        padding: 10
    },
    heading: {
        color: '#5c5d61',
        fontSize: [14, '!important'],
        margin: ['20px 0 2px 25px', '!important']
    },
    textfield: {
        border: ['none', '!important']
    },
    input: {
        backgroundColor: ['unset', '!important'],
        '&:before': {
            borderRadius: 20,
            borderBottom: ['none', '!important'],
            // backgroundColor: '#F5F5F5',
            border: '1px solid #F5F5F5',
            height: 40,
            width: 340
        },
        '&:after': {
            borderBottom: ['none', '!important']
        }
    },
    button: {
        width: 340,
        borderRadius: [20, '!important'],
        marginTop: [20, '!important']
    },
    createButton: {
        width: 340,
        borderRadius: [20, '!important'],
        border: ['3px solid #181b21', '!important'],
        color: ['#181b21', '!important']
    },
    linebreak: {
        color: '#5c5d61',
        width: 60,
        margin: '25px auto',
        '&:before': {
            content: "\0a0",
            display: 'inline-block',
            width: '40%',
            height: 1,
            margin: '0 8px',
            backgroundColor: '#5c5d61'
        }
    }
});

const Signup = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <AccountHeader />
            <Box className={classes.container}>
                <Typography className={classes.signin}>Create Account</Typography>

                <Typography className={classes.heading}>First Name</Typography>
                <TextField InputProps={{ className: classes.input }} size="small" variant="filled" />
                
                <Typography className={classes.heading}>Last Name</Typography>
                <TextField InputProps={{ className: classes.input }} size="small" variant="filled" />
                
                <Typography className={classes.heading}>Email Address</Typography>
                <TextField InputProps={{ className: classes.input }} size="small" variant="filled" />

                <Typography className={classes.heading}>Password</Typography>
                <TextField InputProps={{ className: classes.input }} size="small" variant="filled" />

                <Button className={classes.button} variant="contained">Create Account</Button>
                <Box component="span" className={classes.linebreak}>OR</Box>
                <Button className={classes.createButton} onClick={() => navigate('/login')}>Sign in</Button>
            </Box>
        </>
    )
}

export default Signup;