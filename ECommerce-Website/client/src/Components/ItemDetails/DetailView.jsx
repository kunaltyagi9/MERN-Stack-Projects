
import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from 'clsx';

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
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
    wrapper: {
        display: 'flex'
    }
})

const DetailView = () => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
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
                    <Typography>Available offers</Typography>
                    <Box className={classes.smallText}>
                        <Typography><Badge className={classes.badge} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                        <Typography><Badge className={classes.badge} />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                        <Typography><Badge className={classes.badge} />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                        <Typography><Badge className={classes.badge} />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                <TableCell style={{fontWeight: 600}}>Delivery by 25 May, Tuesday | ₹25</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                    <span style={{color:'#2874f0'}}>SuperComNet</span>
                                    <Typography>GST invoice available</Typography>
                                    <Typography>View more sellers starting from ₹329</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <img src={adURL} style={{width: 390}} />
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                <TableCell>Lounge around in the comfort of Bean Bags Cover. 
                                    The Classic style is the evergreen bean bag cover style with an indulging comfort. 
                                    With a soft leatherette fabric and premium stitching, 
                                    it's a classic must have for any home or office space. 
                                    This is a ready to use, pre-assembled, filled bean bag filled with Beans Cover.
                                </TableCell>
                            </TableRow>
                         </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailView;