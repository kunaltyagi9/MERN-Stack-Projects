
import { Box, styled } from '@mui/material';
import { FavoriteBorderOutlined, ModeCommentOutlined } from "@mui/icons-material";

import Comment from '../../images/comment.svg';

const Container = styled(Box)`
    padding: 10px 0px 8px 16px;
    background: #FFFFFF;
    & > svg {
        font-size: 28px;
        padding-right: 16px;
    }
`

const PostInteraction = () => {
    return (
        <Container>
            <FavoriteBorderOutlined />
            <ModeCommentOutlined />
        </Container>
    )
}

export default PostInteraction;