

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default CodeForInterview;