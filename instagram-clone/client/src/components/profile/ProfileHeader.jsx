import { useState, useEffect } from 'react';

import { Box, styled, Typography } from '@mui/material';

import { emptyprofilePicture } from '../../constants/data';
import { uploadFile } from '../../services/api';

const Component = styled(Box)`
    display: flex;
`

const ImageWrapper = styled(Box)`
    padding: 30px 63px;
`;

const Image = styled('img')({
    borderRadius: '50%',
    width: 150,
    height: 150,
    border: '1px solid #dbdbdb'
})

const ProfileWrapper = styled(Box)`
    padding: 30px;
`

const UsernameText = styled(Typography)`
    color: #262626;
    font-size: 28px;
    font-weight: 300;
    font-family: Segoe UI;
`;

const Wrapper = styled(Box)`
    display: flex;
    margin-top: 20px;
    & > p {
        margin-right: 40px;
        font-family: Segoe UI;
    }
`;

const NameText = styled(Typography)`
    margin-top: 20px;
    color: #262626;
    font-weight: 600;
`

const ProfileHeader = ({ user }) => {

    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState(emptyprofilePicture);

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await uploadFile(data);
                setImageURL(response.data);
                console.log(response);
            }
        }
        getImage();
    }, [file])

    return (
        <Component>
            <label htmlFor="imageInput">
                <ImageWrapper>
                    <Image src={imageURL} alt="profile picture" />
                </ImageWrapper>
            </label>
            <input 
                type="file"
                id="imageInput"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
            />
            <ProfileWrapper>
                <UsernameText>{user?.username}</UsernameText>
                <Wrapper>
                    <Typography>0 posts</Typography>
                    <Typography>{user?.followers?.length} followers</Typography>
                    <Typography>{user?.following?.length} following</Typography>
                </Wrapper>
                <NameText>{user?.name}</NameText>
            </ProfileWrapper>
        </Component>
    )
}

export default ProfileHeader;