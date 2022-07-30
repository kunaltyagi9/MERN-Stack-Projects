

import { Box, styled, Typography } from '@mui/material';

import { emptyprofilePicture } from '../../constants/data';

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


    return (
        <Component>
            <ImageWrapper>
                <Image src={emptyprofilePicture} alt="profile picture" />
            </ImageWrapper>
            <ProfileWrapper>
                <UsernameText>codeforinterview</UsernameText>
                <Wrapper>
                    <Typography>0 posts</Typography>
                    <Typography>0 followers</Typography>
                    <Typography>2 following</Typography>
                </Wrapper>
                <NameText>Code for Interview</NameText>
            </ProfileWrapper>
        </Component>
    )
}

export default ProfileHeader;