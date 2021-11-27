
import { Box, Typography, ButtonGroup, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

let imageURL;

const useStyles = makeStyles({
    container: {
        height: '100vh',
        position: 'relative'
    },
    texts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& :first-child': {
            fontSize: 40,
            color: '#181b21',
            marginTop: 60,
            transition: 'transform .5s ease-in-out .5s,opacity .5s ease-in-out .5s,-webkit-transform .5s ease-in-out .5s'
        },
        '& :last-child': {
            fontSize: 14,
            color: '#181b21'
        }
    },
    btnGroup: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100,
        left: '50%',
        transform: 'translateX(-50%)',
        height: 40,
        '& > *': {
            width: 256,
            borderRadius: [100, '!important'],
            fontSize: [12, '!important']
        },
        '& :first-child': {
            background: '#181b21',
            color: '#fff'
        },
        '& :last-child': {
            color: '#393c41',
            background: '#FFFFFFA6'
        }
    },
    arrow: {
        display: 'flex',
        justifyContent: 'center',
    }
})

const Product = ({ product }) => {
    imageURL = product.imageURL;
    const classes = useStyles();

    return (
        <Box className={classes.container} style={{background: `url(${product.imageURL}) center/100% no-repeat`}}>
            <Box className={classes.texts}>
                <Typography>{product.heading}</Typography>
                <Typography>{product.subHeading}</Typography>
            </Box>
            <Box className={classes.btnGroup}>
                <Button variant="contained">CUSTOM ORDER</Button>
                <Button variant="contained">EXISTING INVENTORY</Button>
            </Box>
            { product.downArrow && <KeyboardArrowDown className={classes.arrow} /> }
        </Box>
    )
}

export default Product;