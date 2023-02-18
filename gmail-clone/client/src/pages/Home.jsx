

import { useOutletContext } from "react-router-dom";
import { Box } from '@mui/material';

const Home = () => {
    const { openDrawer } = useOutletContext();

    return (
        <Box style={openDrawer ? { marginLeft: 250 } : null }>Hello from Home</Box>
    )
}
 
export default Home;