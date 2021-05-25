import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
import { initialState, reducer } from '../../reducers/reducer';

const useStyle = makeStyles({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px'
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
});

const ActionItem = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const { account } = useContext(LoginContext);
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    const addToCart = () => {
        const { id, price, detailUrl, title } = product;
        const { addToCart } = state;
        console.log(state);
        dispatch({ type: 'addToCart', 
            value: { addToCart: { id, price, detailUrl, title, quantity: 2 }}});
        console.log(state);
        history.push('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.productImage} /><br />
            <Button onClick={() => addToCart()} className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
            <Button onClick={() => buyNow()} className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default ActionItem;