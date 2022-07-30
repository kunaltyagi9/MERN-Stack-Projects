


// components
import Header from "../header/Header";
import ProfileHeader from './ProfileHeader';

import { styled, Box, Divider } from '@mui/material';

const Container = styled(Box)`
    margin: 60px auto 0 auto;
    width: 935px;
    align-items: center; 
`

const Profile = () => {

    return (
        <>
            <Container>
                <ProfileHeader />
                <Divider style={{ marginTop: 10 }} />
            </Container>
        </>
    )
}

export default Profile;