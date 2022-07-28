
import { Box, makeStyles, Typography, Divider } from '@material-ui/core';

import { emptyChatImage } from '../../../constants/data';

const useStyle = makeStyles(theme => ({
    component: {
        background: '#f8f9fa',
        padding: '50px 0',
        textAlign: 'center',
        height: '100%'
    },
    container: {
        padding: '0 200px',
        [theme.breakpoints.down('sm')]: {
            padding: -0
        }
    },
    image: {
        width: 320
    },
    title: {
        fontSize: 36,
        fontWeight: 300,
        color: '#525252',
        marginTop: 25
    },
    subTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.45)'
    },
    divider: {
        margin: '30px 0'
    }
}));

const EmptyChat = () => {
    const classes = useStyle();
    
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptyChatImage} alt="empty" className={classes.image} />
                <Typography className={classes.title}>Keep your phone connected</Typography>
                <Typography className={classes.subTitle}>Whatsapp connects you to your phone to sync messages. 
                    To reduce data usage, connect
                    your phone to Wi-Fi.
                </Typography>
                <Divider className={classes.divider} />
            </Box>
        </Box>
    )
}

export default EmptyChat;