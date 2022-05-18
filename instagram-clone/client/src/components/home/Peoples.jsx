

import { Box } from '@mui/material';

import People from './People';

const Peoples = () => {
    return (
        <Box style={{ marginTop: 10 }}>
            {
                [1,2,3,4,5,6,7,8,9].map(data => (
                    <People />
                ))
            }
        </Box>
    )
}

export default Peoples;