import { useState, useEffect } from "react";


// components
import ProfileHeader from './ProfileHeader';
import Posts from "./Posts";

import { styled, Box, Divider } from '@mui/material';
import { useParams } from "react-router-dom";

import { getUserByUsername } from "../../services/api";

const Container = styled(Box)`
    margin: 60px auto 0 auto;
    width: 935px;
    align-items: center; 
`

const Profile = () => {

    const [user, setUser] = useState({});

    const { username } = useParams();
    
    useEffect(() => {
        const getData = async () => {
            let data = await getUserByUsername({ username: username });
            setUser(data.data);
        }
        getData();
    }, [username]);


    return (
        <Container>
            <ProfileHeader user={user} />
            <Divider style={{ marginTop: 10 }} />
            <Posts />
        </Container>
    )
}

export default Profile;