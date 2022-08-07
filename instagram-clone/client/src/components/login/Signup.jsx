import React, { useState } from 'react';

import { Box, Typography, InputAdornment, IconButton  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// css components
import { Component, Container, AccountBox, DisplayText, InputTextField, TncText, StyledButton, Error, ExtraBox, StyledText } from './AccountStyles';

import { signupUser } from '../../services/api';
import { instagramlLogo, applestore, googlestore, emptyprofilePicture } from '../../constants/data';
import { userSignup } from '../../redux/features/userSlice';


const signupInitialValues = {
    email: '',
    name: '',
    username: '',
    password: '',
    followers: [],
    following: [],
    profileUrl: emptyprofilePicture
};

const Signup = () => {

    const [signup, setSignup] = useState(signupInitialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setError('');
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onSignupButtonClick = async () => {
        let response = await signupUser(signup);
        if (response.status === 200) {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            setSignup(signupInitialValues);
            
            dispatch(userSignup(response.data));
            
            navigate('/');
            return;
        }
        setError(response.data.msg);
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Component>
            <Container>
                <AccountBox>
                    <img src={instagramlLogo} alt="logo" style={{ width: 175, margin: '40px 0 10px 0' }} />

                    <DisplayText>Sign up to see photos and videos from your friends.</DisplayText>

                    <InputTextField onChange={(e) => onInputChange(e)} name='email' placeholder="Mobile Number or Email" />
                    <InputTextField onChange={(e) => onInputChange(e)} name='name' placeholder="Full Name" />
                    <InputTextField onChange={(e) => onInputChange(e)} name='username' placeholder="Username" />
                    <InputTextField onChange={(e) => onInputChange(e)} 
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

                    { error && <Error>{error}</Error> }

                    <StyledButton variant="contained" onClick={() => onSignupButtonClick()}>Signup</StyledButton>

                    <TncText>
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </TncText>
                </AccountBox>
                <AccountBox>
                    <Box style={{ padding: '20px 40px' }}>
                        <StyledText>
                            Have an account? <Box component="span" style={{ color: '#0095f6', cursor: 'pointer' }}
                            onClick={() => navigate('/login')}>Log in</Box>
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
            </Container>
        </Component>
    )
}

export default Signup;