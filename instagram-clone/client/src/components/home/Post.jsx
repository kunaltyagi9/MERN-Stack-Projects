
import { styled, Box } from '@mui/material';

// component
import PostHeader from "./PostHeader";
import PostInteraction from './PostInteraction';
import PostInformation from './PostInformation';
import Comments from './Comments';
import PostComment from './PostComment';

const Component = styled(Box)`
    margin: 12px 0;
    border: 1px solid #dbdbdb;
    width: 614px;
    background: #FFFFFF;
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
            <PostInformation />
            <Comments />
            <PostComment />
        </Component>
    )
}

export default Post;