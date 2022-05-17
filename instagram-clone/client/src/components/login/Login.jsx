import { useState, useEffect } from 'react';

import { Box, styled, InputBase, Button, Typography } from '@mui/material';
import { loginImages, instagramLogo } from '../../constants/data';

const Component = styled(Box)`
    height: 100vh;
    width: 100vw;
    background: #FAFAFA;
`;

const Container = styled(Box)`
    justify-content: center;
    display: flex;
    padding-top: 32px;
    margin-right: 50px;
`

const LoginBox = styled(Box)`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin-top: 12px;
    border: 1px solid #dbdbdb;
`;

const InputTextField = styled(InputBase)`
    height: 38px;
    font-size: 14px;
    background: #FAFAFA;
    padding: 9px 0 7px 8px;
    width: 80%;
    margin-bottom: 6px;
    border: 1px solid #dbdbdb;
`;

const LoginButton = styled(Button)`
    width: 80%;
    background-color: #0095f6;
    opacity: .3;
    box-shadow: none;
    text-transform: none;
    font-size: 14px;
    height: 30px;
    margin: 10px 0 15px 0;
`;

const SignupText = styled(Typography)`
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
`

const Login = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const phone = 'https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png'
    const applestore = 'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png';
    const googlestore = 'https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png';


    useEffect(() => {
        slideShow();
    }, [])

    function slideShow() {
        setTimeout(() => {
            setActiveIndex(prevState => prevState + 1);
        }, 2000);
        console.log(activeIndex);
        if (activeIndex === loginImages.length) {
            // setActiveIndex(0);
        }
        setTimeout(slideShow, 2000);
    }

    return (
        <Component>
            <Container>
                <Box style={{ position: 'relative' }}>
                    <img src={phone} alt="phone" />
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
                    <LoginBox>
                        <img src={instagramLogo} alt="logo" style={{ width: 175, margin: '40px 0 40px 0' }} />
                        
                        <InputTextField placeholder="Phone number, username or email" />
                        <InputTextField placeholder="Password" />
                        
                        <LoginButton variant="contained">Log In</LoginButton>
                        
                        <Typography style={{ fontSize: 13, color: '#8e8e8e' }}>OR</Typography>
                        <Typography style={{ color: '#385185', fontSize: 14, margin: 20, fontWeight: 600 }}>Log in with Facebook</Typography>
                        <Typography style={{ color: '#00376b', fontSize: 12, marginBottom: 20 }}>Forgot Password?</Typography>
                    </LoginBox>
                    <LoginBox>
                        <Box  style={{ padding: '20px 40px' }}>
                            <SignupText>
                                Don't have an account? <Box component="span" style={{ color: '#0095f6' }}>Sign up</Box>
                            </SignupText>
                        </Box>
                    </LoginBox>
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