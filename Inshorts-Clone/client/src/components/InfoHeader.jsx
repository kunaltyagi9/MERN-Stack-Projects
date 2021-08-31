
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        background: '#f44336',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        height: 48
    },
    logo: {
        height: 37,
        '&:last-child': {
            margin: '0 50px 0 20px'
        }
    },
    text: {
        fontSize: 14,
        fontWeight: 300,
        marginLeft: 50,
        fontFamily: "sans-serif"
    }
})

const InfoHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>
                For the best experience use inshorts app on your smartphone
            </Typography>
            <Box style={{marginLeft: 'auto'}}>
                <img src={appleStore} alt="apple store"  className={classes.logo} />
                <img src={googleStore} alt="google store"  className={classes.logo}  />
            </Box>
        </Box>
    )
}

export default InfoHeader;