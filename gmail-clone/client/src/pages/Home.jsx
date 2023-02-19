

import { useOutletContext } from "react-router-dom";
import { Box, Typography, styled } from '@mui/material';

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
    opacity: .8
})

const Home = () => {
    const { openDrawer } = useOutletContext();

    return (
        <Component style={openDrawer ? { marginLeft: 250 } : null }>
            <Typography>Your inbox is empty</Typography>
            <Typography>Mails that don't appear in other tabs will be shown here.</Typography>
        </Component>
    )
}
 
export default Home;