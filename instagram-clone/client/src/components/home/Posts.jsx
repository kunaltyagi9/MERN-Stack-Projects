

//component
import Post from './Post';

import { Box } from '@mui/material';


const Posts = () => {
    return (
        <Box>
            {
                [1,2,3,4,5,6,7].map(data => (
                    <Post />
                ))
            }
        </Box>
    )
}

export default Posts;