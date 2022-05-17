
import { Box, styled, InputBase, Button, Typography } from '@mui/material';


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

const InputTextField = styled(InputBase)`
    height: 38px;
    font-size: 14px;
    background: #FAFAFA;
    padding: 9px 0 7px 8px;
    width: 80%;
    margin-bottom: 6px;
    border: 1px solid #dbdbdb;
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
    opacity: .3;
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
`

const Signup = () => {

    const logo = 'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png';
    const applestore = 'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png';
    const googlestore = 'https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png';


    return (
        <Component>
            <Container>
                <LoginBox>
                    <img src={logo} alt="logo" style={{ width: 175, margin: '40px 0 10px 0' }} />

                    <DisplayText>Sign up to see photos and videos from your friends.</DisplayText>

                    <InputTextField placeholder="Mobile Number or Email" />
                    <InputTextField placeholder="Full Name" />
                    <InputTextField placeholder="Username" />
                    <InputTextField placeholder="Password" />

                    <LoginButton variant="contained">Signup</LoginButton>

                    <TncText>
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </TncText>
                </LoginBox>
                <LoginBox>
                    <Box style={{ padding: '20px 40px' }}>
                        <LoginText>
                            Have an account? <Box component="span" style={{ color: '#0095f6' }}>Log in</Box>
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