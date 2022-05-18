
import { Box, styled } from '@mui/material';

// components
import Header from "../header/Header";
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
            <Header />
            <Container>
                <Posts />
                <Suggestions />
            </Container>
        </>
    )
}

export default Home;