

import { Box, styled, Typography } from '@mui/material';
import { emptyprofilePicture } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
    padding: 5px 0;
    align-items: center;
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

const Tags = styled(Typography)`
    font-size: 12px;
    color: #8e8e8e;
`

const Follow = styled(Typography)`
    margin-left: auto;
    font-size: 12px;
    color: #0095f6;
`

const People = () => {


    return (
        <Component>
            <ProfilePicture src={emptyprofilePicture} alt="profile picture" />
            <Wrapper>
                <Name>username</Name>
                <Tags>Popular</Tags>
            </Wrapper>
            <Follow>Follow</Follow>
        </Component>
    )
}

export default People;