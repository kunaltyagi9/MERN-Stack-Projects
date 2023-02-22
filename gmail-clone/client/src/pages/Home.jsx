

import { useOutletContext } from "react-router-dom";
import { Box } from '@mui/material';
import { EMPTY_TABS } from "../constants/constant";
import NoMails from "../components/common/NoMails";

const Home = () => {
    const { openDrawer } = useOutletContext();

    return (
        <Box style={{ width: '100%' }}>
            <Box style={openDrawer ? { marginLeft: 250 } : null }>
                <NoMails message={EMPTY_TABS.inbox} />
            </Box>
        </Box>
    )
}
 
export default Home;