import { useState } from 'react';

// custom hook
import useInterval from '../../hooks/useInterval';

import { Box, Typography, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// css components
import { Component, Container, AccountBox, InputTextField, StyledButton, Error, ExtraBox, StyledText } from './AccountStyles';

import { loginImages, instagramLogo, displayPhone, applestore, googlestore } from '../../constants/data';
import { loginUser } from '../../services/api';
import { userLogin } from '../../redux/features/userSlice';


const loginInitialValues = {
    username: '',
    password: ''
};

const Login = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [login, setLogin] = useState(loginInitialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [error, showError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useInterval(() => {
        if (activeIndex === loginImages.length - 1) {
            setActiveIndex(-1);
        }
        
        setActiveIndex(prevState => prevState + 1);
    }, 2000);

    const onValueChange = (e) => {
        showError('');
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onLoginButtonClick = async () => {
        const response = await loginUser(login);
        
        if (response.status === 200) {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            
            setLogin(loginInitialValues);
            dispatch(userLogin(response.data));
            
            navigate('/');
            return;
        }   
        
        showError(response.data.msg);
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Component>
            <Container style={{ marginRight: 50, flexDirection: 'row' }}>
                <Box style={{ position: 'relative' }}>
                    <img src={displayPhone} alt="phone" />
                    <img src={loginImages[activeIndex]} alt="insta"
                        style={{
                            position: 'absolute',
                            right: 55,
                            height: 550,
                            top: 20
                        }}
                    />
                </Box>
                <Box>
                    <AccountBox>
                        <img src={instagramLogo} alt="logo" style={{ width: 175, margin: '40px 0 40px 0' }} />
                        
                        <InputTextField 
                            placeholder="Phone number, username or email"
                            value={login.username} 
                            onChange={(e) => onValueChange(e)} 
                            name='username'
                         />
                        <InputTextField onChange={(e) => onValueChange(e)} 
                            name='password' placeholder="Password" type={showPassword ? 'text' : 'password'} 
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleShowPassword()}
                                    >
                                        <Typography style={{ fontSize: 14, fontWeight: 600 }}>{showPassword ? 'Hide' : 'Show'}</Typography>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        
                        {error && <Error>{error}</Error>}

                        <StyledButton variant="contained" onClick={() => onLoginButtonClick()}>Log In</StyledButton>
                        
                        <Typography style={{ fontSize: 13, color: '#8e8e8e' }}>OR</Typography>
                        <Typography style={{ color: '#385185', fontSize: 14, margin: 20, fontWeight: 600 }}>Log in with Facebook</Typography>
                        <Typography style={{ color: '#00376b', fontSize: 12, marginBottom: 20 }}>Forgot Password?</Typography>
                    </AccountBox>
                    <AccountBox>
                        <Box  style={{ padding: '20px 40px' }}>
                            <StyledText>
                                Don't have an account? <Box component="span" style={{ color: '#0095f6', cursor: 'pointer' }}
                                onClick={() => navigate('/signup')}>Sign up</Box>
                            </StyledText>
                        </Box>
                    </AccountBox>
                    <ExtraBox>
                        <Typography>Get the app.</Typography>
                        <Box>
                            <img src={applestore} alt="applestore" />
                            <img src={googlestore} alt="googlestore" />
                        </Box>
                    </ExtraBox>
                </Box>
            </Container>
        </Component>
    )
}

export default Login;