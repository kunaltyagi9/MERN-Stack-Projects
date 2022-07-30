import React, { useState } from 'react';

import { Box, styled, Input, Button, Typography, InputAdornment, IconButton  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { signupUser } from '../../services/api';
import { instagramlLogo, applestore, googlestore } from '../../constants/data';

const Component = styled(Box)`
    height: 100vh;
    width: 100vw;
    background: #FAFAFA;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;
`;

const LoginBox = styled(Box)`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin-top: 12px;
    border: 1px solid #dbdbdb;
`;

const DisplayText = styled(Typography)`
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    margin: 0 36px 20px 36px;
    text-align: center;
    line-height: 20px;
`

const InputTextField = styled(Input)`
    height: 38px;
    font-size: 14px;
    background: #FAFAFA;
    padding: 9px 0 7px 8px;
    width: 80%;
    margin-bottom: 6px;
    border: 1px solid #dbdbdb;
    outline: none;
    &:before, &:hover, &:after {
        border-bottom: none !important;
    }
`;

const TncText = styled(Typography)`
    font-size: 13px;
    color: #8e8e8e;
    margin: 0 45px;
    text-align: center; 
    margin-bottom: 20px;
`;

const LoginButton = styled(Button)`
    width: 80%;
    background-color: #0095f6;
    box-shadow: none;
    text-transform: none;
    font-size: 14px;
    height: 30px;
    margin: 10px 0 15px 0;
`;

const LoginText = styled(Typography)`
    font-size: 14px;
    color: #262626;
`;

const ExtraBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin-top: 20px;
    & > p {
        color: #262626;
        font-size: 14px;
        margin-bottom: 15px;
    };
    & > div > img {
        height: 40px;
        margin: 5px;
    }
`;

const Error = styled(Typography)`
    color: red;
    font-size: 12px;
`

const signupInitialValues = {
    email: '',
    name: '',
    username: '',
    password: ''
};

const Signup = () => {

    const [signup, setSignup] = useState(signupInitialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onInputChange = (e) => {
        setError('');
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const userSignup = async () => {
        let response = await signupUser(signup);
        if (response.status === 200) {
            setSignup(signupInitialValues);
            navigate('/login');
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
                <LoginBox>
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

                    <LoginButton variant="contained" onClick={() => userSignup()}>Signup</LoginButton>

                    <TncText>
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </TncText>
                </LoginBox>
                <LoginBox>
                    <Box style={{ padding: '20px 40px' }}>
                        <LoginText>
                            Have an account? <Box component="span" style={{ color: '#0095f6', cursor: 'pointer' }}
                            onClick={() => navigate('/login')}>Log in</Box>
                        </LoginText>
                    </Box>
                </LoginBox>
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