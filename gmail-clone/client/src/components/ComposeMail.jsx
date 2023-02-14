import { useState } from 'react';

import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`

const ComposeMail = ({ open }) => {
    const [data, setData] = useState({});

    const config = {
        Username: 'codeforinterview@yopmail.com',
        Password: 'A53656D41C06F613E936B1993824C5B9AB71',
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To : data.to,
                From : "codeforinterview03@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
                message => alert(message)
            );
        }
    }

    return (
        <Dialog
            open={open}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
            </RecipientWrapper>
            <TextField 
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
            <Footer>
                <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutline />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;