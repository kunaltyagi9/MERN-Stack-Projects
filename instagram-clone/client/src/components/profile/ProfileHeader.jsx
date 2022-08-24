

import { Box, styled, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { emptyprofilePicture } from '../../constants/data';
import { getUser } from '../../redux/features/userSlice';

const Component = styled(Box)`
    display: flex;
`

const ImageWrapper = styled(Box)`
    padding: 30px 63px;
`;

const Image = styled('img')({
    borderRadius: '50%',
    width: 150,
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

const ProfileHeader = () => {

    const user = useSelector(getUser);

    return (
        <Component>
            <label htmlFor="imageInput">
                <ImageWrapper>
                    <Image src={emptyprofilePicture} alt="profile picture" />
                </ImageWrapper>
            </label>
            <input 
                type="file"
                id="imageInput"
                style={{ display: 'none' }}
            />
            <ProfileWrapper>
                <UsernameText>{user.username}</UsernameText>
                <Wrapper>
                    <Typography>0 posts</Typography>
                    <Typography>{user.followers.length} followers</Typography>
                    <Typography>{user.following.length} following</Typography>
                </Wrapper>
                <NameText>{user.name}</NameText>
            </ProfileWrapper>
        </Component>
    )
}

export default ProfileHeader;