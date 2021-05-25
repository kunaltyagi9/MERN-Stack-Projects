import { Card, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0
    }
});

const CartDetail = () => {
    const classes = useStyle();
    return (
        <Card className={classes.component}>
            Hello
        </Card>
    )
}

export default CartDetail;