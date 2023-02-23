

import { ListItem, Checkbox, Typography, styled } from "@mui/material";
import { StarBorder, Star } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from "../services/api.urls";

const Wrapper = styled(ListItem)`
    padding: 0 0 0 10px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
    }
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 15
})

const Email = ({ email, type, setStarredEmail, selectedEmails, setSelectedEmails }) => {
    const toggleStarredEmailService = useApi(API_URLS.toggleStarredMails);

    const toggleStarredEmail = () => {
        toggleStarredEmailService.call({ id: email._id, value: !email.starred });
        setStarredEmail(prevState => !prevState);
    }

    const handleChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        }
    }

    return (
        <Wrapper>
            <Checkbox 
                size="small" 
                checked={selectedEmails.includes(email._id)}
                onChange={() => handleChange()} 
            />
            { 
                email.starred ? 
                    <Star fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} />
                : 
                    <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} /> 
            }
            <Typography style={{ width: 200 }}>To:{email.to.split('@')[0]}</Typography>
            <Indicator>{type === 'sent' && 'Inbox'}</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <Date>{(new window.Date(email.date)).getDate()} {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}</Date>
        </Wrapper>
    )
}

export default Email;