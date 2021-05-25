import React, { useState, useContext } from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import LoginDialog from '../Login/LoginDialog';
import { LoginContext } from '../../context/ContextProvider';
const useStyle = makeStyles({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center'      
        }
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none'
    }
})


const CustomButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Link><Typography style={{ marginTop: 2 }}>{account}</Typography></Link> : 
                <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openDialog() }>Login</Button>
                </Link>
            }
            <Link>
                <Typography style={{ marginTop: 2 }}>More</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default CustomButtons;