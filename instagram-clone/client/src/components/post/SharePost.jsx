import { useState } from 'react';

import { Dialog, Typography, Box, styled, InputBase } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { getUser } from '../../redux/features/userSlice';
import { savePost } from '../../services/api';

const Header = styled(Box)`
    border-bottom: 1px solid rgb(219, 219, 219);
    padding: 0 15px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    & > * {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        align-self: center;
    }
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    height: 100%;
    display: flex;
`

const Image = styled('img')({
    width: 534,
    height: 534,
    objectFit: 'cover'
});

const Container = styled(Box)`
    margin: 16px;
    & > div {
        display: flex;
        margin-bottom: 10px;
    }
    & > div > img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }
    & > div > p {
        font-weight: 700;
    }
`;

const dialogStyle = {
    marginTop: '2%',
    height: '580px',
    width: '875px',
    borderRadius: 3,
    boxShadow: 'none',
    overflow: 'hidden'
}

const defaultValues = {
    username: '',
    userPicture: '',
    image: '',
    caption: '',
    likes: [],
    comments: []
}

const SharePost = ({ open, setOpen, image }) => {

    const [post, setPost] = useState(defaultValues);

    const user = useSelector(getUser);

    const closeDialog = () => {
        setOpen(false);
    }

    const onValueChange = (e) => {
        setPost({ ...post, caption: e.target.value })
    }

    const createPost = async () => {
        const payload = { ...post, username: user.username, userPicture: user.picture, image: image }

        await savePost(payload);

        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={() => closeDialog()}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <KeyboardBackspace />
                <Typography style={{ color: 'color: rdb(38, 38, 38)'}}>Create new post</Typography>
                <Typography style={{ color: '#0095F6' }} onClick={() => createPost()}>Share</Typography>
            </Header>
            <Wrapper>
                <Image src={image} alt="image" />
                <Container>
                    <Box>
                        <img src={user?.picture} alt="dp" />
                        <Typography>{user.username}</Typography>
                    </Box>
                    <InputBase 
                        placeholder='Write a caption...'
                        onChange={(e) => onValueChange(e)}
                    />
                </Container>
            </Wrapper>
        </Dialog>
    )
}

export default SharePost;