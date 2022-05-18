

import { Box, Typography, styled } from "@mui/material"

const Component = styled(Box)`
    padding: 0px 16px 8px 16px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
`

const Comment = () => {
    return (
        <Component>
            <Text>username <Box style={{ fontWeight: 400 }} component="span">This is a comment</Box></Text>
        </Component>
    )
}

export default Comment;