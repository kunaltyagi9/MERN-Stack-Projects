import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};