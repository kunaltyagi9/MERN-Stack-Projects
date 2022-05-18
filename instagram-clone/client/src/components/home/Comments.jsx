


import { Box } from '@mui/material';

import Comment from './Comment';

const Comments = () => {
    return (
        <Box>
            {
                [1,2].map(data => (
                    <Comment />
                ))
            }
        </Box>
    )
}

export default Comments;