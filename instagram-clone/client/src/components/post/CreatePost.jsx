import { useState } from 'react';

import { Dialog, Typography, Box, styled } from '@mui/material';

import { uploadFile } from '../../services/api';

// components
import SharePost from './SharePost';

const Header = styled(Box)`
    border-bottom: 1px solid rgb(219, 219, 219);
    align-items: center;
    height: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
        align-items: center;
        display: flex;
        text-align: center;
        justify-content: center;
        color: rdb(38, 38, 38);
        font-weight: 600;
        flex-direction: column;
    }
`;

const ImageWrapper = styled(Box)({
    width: 200,
    height: 85,
    overflow: 'hidden',
    '& > img': {
        width: 550,
        height: 300,
        margin: '-65px 0 0 -165px'
    }
});

const Wrapper = styled(Box)`
    align-self: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
        font-size: 22px;
        font-family: inherit;
        font-weight: 300;
    }
    & > label > p { 
        background: #0095F6;
        color: #fff;
        border-radius: 4px;
        font-size: 14px;
        margin-top: 20px;
        text-transform: none;
        width: fit-content;
        padding: 5px 10px;
    }
`

const dialogStyle = {
    marginTop: '2%',
    height: '580px',
    width: '550px',
    borderRadius: 3,
    boxShadow: 'none',
    overflow: 'hidden'
}

const CreatePost = ({ open, setOpen }) => {

    const [image, setImage] = useState('');
    const [share, setShare] = useState(false);

    const uploadImage = 'https://havecamerawilltravel.com/wp-content/uploads/2021/10/Instagram-Post-from-Computer-or-Laptop-2.jpg';

    const closeDialog = () => {
        setOpen(false);
    }

    const onFileChange = async (e) => {
        const data = new FormData();
        data.append("name", e.target.files[0].name);
        data.append("file", e.target.files[0]);

        let response = await uploadFile(data);

        if (response) {
            setImage(response.data);
            setShare(true);
        }
    }

    return (
        !share ? 
            <Dialog
                open={open}
                onClose={() => closeDialog()}
                // BackdropProps={{style: {backgroundColor: 'unset'}}}
                maxWidth={'md'}
                PaperProps={{ sx: dialogStyle }}
            >
                <Header>
                    <Typography>Create new post</Typography>
                </Header>
                <Wrapper>
                    <ImageWrapper>
                        <img src={uploadImage} alt="image" />
                    </ImageWrapper>
                    <Typography>Drag photos and videos here</Typography>
                    <label htmlFor="imageInput">
                        <Typography>Select from computer</Typography>
                    </label>
                    <input
                        type='file'
                        id="imageInput"
                        style={{ display: 'none' }}
                        onChange={(e) => onFileChange(e)}
                    />
                </Wrapper>
            </Dialog>
        :
        <SharePost open={share} setOpen={setShare} image={image} closeDialog={closeDialog} />
    )
}

export default CreatePost;