
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 47,
        width: '100%',
        height: 550,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    heading: {
        fontWeight: [600, "!important"],
        fontSize: [56, "!important"]
    },
    subHeading: {
        padding: '0 0 5px 0',
        fontSize: [28, "!important"]
    },
    link: {
        fontSize: [21, "!important"],
        padding: '0 30px'
    }
})

const Section = ({ data }) => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.container} style={{background: `url(${data.imageURL}) 50% 165% no-repeat`}}>
                <Typography className={classes.heading} style={{color: data.headColor}} variant="h3">{data.heading}</Typography>
                <Typography className={classes.subHeading} style={{color: data.subHeadColor}}variant="h5">{data.subHeading}</Typography>
                <Typography style={{marginTop: '5px'}}>
                    <Typography className={classes.link} component="span" variant="h5">Learn more</Typography>
                    <Typography className={classes.link} component="span" variant="h5">Buy</Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default Section;