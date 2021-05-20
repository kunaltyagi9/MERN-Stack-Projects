import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getProductById } from '../../service/api';

const useStyles = makeStyles({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        margin: '0 80px',
        display: 'flex'
    },
    leftContainer: {
        minWidth: '40%'
    }, 
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
})

const DetailView = () => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        console.log('Hi');
        getProductValues();
    }, []);

    const getProductValues = async () => {
        console.log('Hei')
        const response = await getProductById(id);
        console.log(response);
        setProduct(response);
    }

    return (
        <Box className={classes.component}>
            <Box></Box>
            <Box className={classes.container}> 
                <Box className={classes.leftContainer}></Box>
                
                <Box className={classes.rightContainer}>
                    <Typography>Devogue XXL Tear Drop Bean Bag Cover (Without Beans)  (Black, Brown)</Typography>
                    <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹799</span>&nbsp;&nbsp;&nbsp; 
                        <span className={classes.greyTextColor}><strike>₹3,999</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color: '#388E3C'}}>80% off</span>
                    </Typography>
                    <ProductDetail />
                </Box>
            </Box>
        </Box>
    )
}

export default DetailView;