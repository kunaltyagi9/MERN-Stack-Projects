

import { Box, styled, Typography } from '@mui/material';
import { emptyprofilePicture } from '../../constants/data';

const Component = styled(Box)`
    background-color: #FFFFFF;
    display: flex;
    padding: 17px 4px 17px 16px;
`

const ProfilePicture = styled('img')({
    borderRadius: '50%',
    height: 30,
    border: '1px solid #dbdbdb'
});

const Wrapper = styled(Box)`
    margin-left: 15px;
`;

const Name = styled(Typography)`
    font-size: 12px;
    font-weight: 600;
`;

const Location = styled(Typography)`
    font-size: 12px;
`

const PostHeader = () => {
    return (
        <Component>
            <ProfilePicture src={emptyprofilePicture} alt="profile picture" />
            <Wrapper>
                <Name>Name</Name>
                <Location>Location</Location>
            </Wrapper>
        </Component>
    )
}

export default PostHeader;