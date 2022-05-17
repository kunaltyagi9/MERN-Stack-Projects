
import { styled, Box } from '@mui/material';

// component
import PostHeader from "./PostHeader";
import PostInteraction from './PostInteraction';

const Component = styled(Box)`
    margin: 12px 0;
    border: 1px solid #dbdbdb;
    width: 614px;
`;

const Picture = styled('img')({
    width: '100%'
})

const Post = () => {
    const post = 'https://wallpaperaccess.com/full/211836.jpg';
    return (
        <Component>
            <PostHeader />
            <Picture src={post} alt="picture" />
            <PostInteraction />
        </Component>
    )
}

export default Post;