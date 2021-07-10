import { useContext } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core"

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        background: '#FFFFFF',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14   ,
            color:'#009688' 
        },
        '& :last-child': {
            margin: '14px 0',
            color: '#4A4A4A'
        }
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            color: 'rgba(0, 0, 0, 0.45)',
            fontSize: 12
        }
    }
})

const Profile = () => {
    const classes = useStyles();

    const { account } = useContext(AccountContext);

    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt="displaypicture" className={classes.profilePicture} />
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.description}>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat</Typography>
            </Box>
        </>
    )
}

export default Profile;