
import { Typography, Box } from "@mui/material"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    component: {
        backgroundColor: '#f5f5f7',
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px!important',
        padding: '12px 0',
        color: '#1d1d1f'
    }
})

const Info = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography className={classes.text}>Shop now at the Apple Store online with many great ways to buy. 
                Get free, no-contact delivery, Specialist help and more</Typography>
        </Box>
    )
}

export default Info;