
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        height: 580,
        objectFit: 'cover',
        margin: '0 10px'
    },
    heading: {
        paddingTop: 60,
        fontWeight: [600, "!important"],
        fontSize: [30, "!important"]
    },
    subHeading: {
        padding: '5px 0 5px 0',
        fontSize: [21, "!important"],
        maxWidth: 450,
        textAlign: 'center'
    },
    link: {
        fontSize: [21, "!important"],
        padding: '0 30px'
    }
})


const Product = ({ data }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container} style={{background: `url(${data.imageURL}) 50% 165% no-repeat`}}>
            <Typography className={classes.heading} style={{color: data.headColor}} variant="h3">{data.heading}</Typography>
            <Typography className={classes.subHeading} style={{color: data.subHeadColor}}variant="h5">{data.subHeading}</Typography>
            <Typography style={{marginTop: '5px'}}>
                <Typography className={classes.link} component="span" variant="h5">Learn more</Typography>
                <Typography className={classes.link} component="span" variant="h5">Buy</Typography>
            </Typography>
        </Box>
    )
}

export default Product