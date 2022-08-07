
import { Box, styled, Typography, Divider } from '@mui/material';

import { emptyChatImage } from '../../../constants/data';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 50px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
const Image = styled('img')({
    width: 320
})
   
const Title = styled(Typography)`
    font-size: 36px;
    font-weight: 300;
    color: #525252;
    margin-top: 25px;
`;

const SubTitle = styled(Typography)`
    margin-top: 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
`;

const StyledDivider = styled(Divider)`
    margin: 30px 0;
`;

const EmptyChat = () => {
    
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <Title>Keep your phone connected</Title>
                <SubTitle>Whatsapp connects you to your phone to sync messages. 
                    To reduce data usage, connect
                    your phone to Wi-Fi.
                </SubTitle>
                <StyledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;