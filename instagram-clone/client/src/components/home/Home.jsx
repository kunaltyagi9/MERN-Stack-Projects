
import { Box, styled } from '@mui/material';

// components
import Posts from "./Posts";
import Suggestions from './Suggestions';

const Container = styled(Box)`
    margin: 60px auto 0 auto;
    width: 935px;
    display: flex;
    align-items: center;
`

const Home = () => {
    return (
        <>
            <Container>
                <Posts />
                <Suggestions />
            </Container>
        </>
    )
}

export default Home;