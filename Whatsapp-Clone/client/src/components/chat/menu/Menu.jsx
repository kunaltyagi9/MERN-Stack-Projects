
import { Box } from '@material-ui/core';

//components
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    return (
        <Box>
            <Box>
                <Header/>
                <Search/>
                <Conversations/>
            </Box>
        </Box>
    )
}

export default Menu;