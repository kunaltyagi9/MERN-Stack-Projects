import { useState } from 'react';

import { Header, Main, SideBar } from '../components';

import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)`
    display: flex;
`

const Home = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <Wrapper>
                <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
                <Main openDrawer={openDrawer} />
            </Wrapper>
        </>
    )
}

export default Home;