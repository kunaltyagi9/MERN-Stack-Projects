

import { Box, styled, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { emptyprofilePicture } from '../../constants/data';
import { getUser } from '../../redux/features/userSlice';
import { followUser } from '../../services/api';


const Component = styled(Box)`
    display: flex;
    padding: 5px 0;
    align-items: center;
    cursor: pointer
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

const People = ({ user, setCaptureClick }) => {

    const account = useSelector(getUser);

    const openProfile = () => {

    }

    const onFollowClick = async () => {
        await followUser({ account: account.username, user: user.username })
        setCaptureClick(prevState => !prevState);
    }

    return (
        <>
            {
                !account.following.find(data => data.username === user.username) && account.username !== user.username &&
                    <Component onClick={() => openProfile()}>
                        <ProfilePicture src={user.ProfilePicture || emptyprofilePicture} alt="profile picture" />
                        <Wrapper>
                            <Name>{user.username}</Name>
                            <Tags>Popular</Tags>
                        </Wrapper>
                        <Follow onClick={() => onFollowClick()}>Follow</Follow>
                    </Component>
            }
        </>
    )
}

export default People;