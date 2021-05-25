import { Box, makeStyles, Typography } from '@material-ui/core';
import CardDetail from './CartDetail';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        display: 'flex'
    },
    leftComponent: {
        width: '66%',
        marginRight: 15
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    }
})

const Cart = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Box className={classes.header}>
                    <Typography style={{fontWeight: 600}}>My Cart</Typography>
                </Box>
                <CardDetail />
            </Box>
            <Box>   
                hello
            </Box>
        </Box>

    )
}

export default Cart;