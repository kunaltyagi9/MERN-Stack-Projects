import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
import { Box, List, Checkbox } from '@mui/material';
import Email from './Email';
import { DeleteOutline } from '@mui/icons-material';
import NoMails from './common/NoMails';
import { EMPTY_TABS } from '../constants/constant';

const Emails = () => {
    const [starredEmail, setStarredEmail] = useState(false);
    const [deleteEmails, setDeleteEmails] = useState([]);

    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType);
    const deleteEmailsService = useApi(API_URLS.deleteEmails);

    useEffect(() => {
        getEmailsService.call({}, type);
    }, [type, starredEmail])

    const selectAllEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailsService?.response?.map(email => email._id);
            setDeleteEmails(emails);
        } else {
            setDeleteEmails([]);
        }
    }

    const deleteSelectedEmails = () => {
        deleteEmailsService.call(deleteEmails);
        setStarredEmail(prevState => !prevState);
    }

    return (
        <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }>
            <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
                <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
            </Box>
            <List>
                {
                    getEmailsService?.response?.map(email => (
                        <Email 
                            email={email} 
                            type={type} 
                            key={email.id}
                            setStarredEmail={setStarredEmail} 
                            deleteEmails={deleteEmails}
                            setDeleteEmails={setDeleteEmails}
                        />
                    ))
                }
            </List> 
            {
                getEmailsService?.response?.length === 0 &&
                    <NoMails message={
                        type === 'sent' ? EMPTY_TABS.sent :
                        type === 'drafts' ? EMPTY_TABS.drafts : 
                        EMPTY_TABS.starred
                    } />
            }
        </Box>
    )
}

export default Emails;