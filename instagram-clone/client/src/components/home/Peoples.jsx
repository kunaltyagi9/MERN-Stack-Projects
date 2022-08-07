import { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getAllUsers } from '../../services/api';
import { setUsers, getUsers } from '../../redux/features/userSlice';

import People from './People';

const Peoples = () => {

    const [captureClick, setCaptureClick] = useState(false);

    const dispatch = useDispatch();

    const users = useSelector(getUsers);
    
    useEffect(() => {
        const getData = async () => {
            let response = await getAllUsers();
            if (response && response.status === 200) {
                dispatch(setUsers(response.data.data));
            }
        }
        getData();
    }, [captureClick])

    return (
        <Box style={{ marginTop: 10 }}>
            {
                users.map(user => (
                    <People 
                        user={user} 
                        setCaptureClick={setCaptureClick}
                    />
                ))
            }
        </Box>
    )
}

export default Peoples;