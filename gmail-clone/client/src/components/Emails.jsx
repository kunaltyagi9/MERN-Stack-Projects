import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
import { Box, List, Checkbox } from '@mui/material';
import Email from './Email';
import { DeleteOutline } from '@mui/icons-material';

const Emails = () => {
    const [starredEmail, setStarredEmail] = useState(false);

    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType);

    useEffect(() => {
        getEmailsService.call({}, type);
    }, [type, starredEmail])

    return (
        <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }>
            <Box style={{ padding: '50px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" />
                <DeleteOutline />
            </Box>
            <List>
                {
                    getEmailsService?.response?.map(email => (
                        <Email 
                            email={email} 
                            type={type} 
                            key={email.id}
                            setStarredEmail={setStarredEmail} 
                        />
                    ))
                }
            </List> 
        </Box>
    )
}

export default Emails;