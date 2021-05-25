import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { ...data, quantity }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};