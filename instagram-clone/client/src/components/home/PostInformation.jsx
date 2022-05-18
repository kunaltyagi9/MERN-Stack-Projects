

import { Box, Typography, styled } from "@mui/material"

const Component = styled(Box)`
    padding: 0px 16px 8px 16px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`

const PostInformation = () => {
    return (
        <Component>
            <Text>0 likes</Text>
            <Text>username <Box style={{ fontWeight: 400 }} component="span">Words are Words</Box></Text>
        </Component>
    )
}

export default PostInformation;