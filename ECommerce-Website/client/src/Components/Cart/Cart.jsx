import { Box, makeStyles, Typography } from '@material-ui/core';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        display: 'flex'
    },
    leftComponent: {
        width: '67%',
        marginRight: 15
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    }
})

const Cart = ({ match, history }) => {
    const classes = useStyle();

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && match.params.id !== cartItems.id)   
            dispatch(addToCart(match.params.id));
        console.log(cartItems);
    }, [dispatch, cartItems, match]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <>
        { cartItems.length ? 
            <Box className={classes.component}>
                <Box className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Box>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                </Box>
                <TotalView cartItems={cartItems} />
            </Box> : <EmptyCart />
        }
        </>

    )
}

export default Cart;