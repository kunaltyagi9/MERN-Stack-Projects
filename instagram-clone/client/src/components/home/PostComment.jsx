

import { Box, InputBase, Button, styled } from '@mui/material';
import { SentimentSatisfiedAltOutlined } from '@mui/icons-material';

const Component = styled(Box)`
    padding: 6px 16px;
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Emoji = styled(SentimentSatisfiedAltOutlined)`
    font-size: 28px;
`;

const InputTextField = styled(InputBase)`
    width: 100%;
    margin-left: 10px;
    font-size: 14px;
`;

const PostButton = styled(Button)`
    opacity: .3;
    color: #0095f6;
    text-transform: none;
`

const PostComment = () => {
    return (
        <Component>
            <Emoji />
            <InputTextField placeholder='Add a comment...' />
            <PostButton>Post</PostButton>
        </Component>
    )
}

export default PostComment