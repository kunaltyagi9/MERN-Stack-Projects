
import { Box, Typography, ButtonGroup, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
// import { keyframes } from '@mui/system';

// const fade = keyframes`
//     from {top:0px; opacity: 0;}
//     to {top:100px; opacity: 1;}
    
// `

const useStyles = makeStyles({
    "@keyframes fadeIn": {
        "0%": {
          opacity: 0,
        //   transform: "translateY(5rem)"
        },
        "100%": {
          opacity: 1,
        //   transform: "translateY(0)"
        }
    },
    container: {
        height: '100vh',
        position: 'relative'
    },
    texts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        animation: `$fadeIn 2s ease-out forwards`,
        animationIterationCount: '2',
        /* chrome and safari */
        WebkitAnimation: `$fadeIn 3s`,
        WebkitAnimationIterationCount: 1,
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
            {/* { product.downArrow && <KeyboardArrowDown className={classes.arrow} /> } */}
        </Box>
    )
}

export default Product;