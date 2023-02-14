import { useState } from 'react';
import { Button, List, ListItem, Box, styled, Typography } from '@mui/material';
import { CreateOutlined, Photo, StarOutline, SendOutlined, InsertDriveFileOutlined } from '@mui/icons-material';
import ComposeMail from './ComposeMail';

const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > li > svg {
            margin-right: 20px;
        }
    }
`

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`

const SideBarContent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const onComposeClick = () => {
        setOpenDrawer(true);
    }

    return (
        <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined style={{ marginRight: 10 }} />Compose
            </ComposeButton>
            <List>
                <ListItem><Photo fontSize="small" />Inbox</ListItem>
                <ListItem><StarOutline fontSize="small" />Starred</ListItem>
                <ListItem><SendOutlined fontSize="small" />Sent</ListItem>
                <ListItem><InsertDriveFileOutlined fontSize="small" />Drafts</ListItem>
            </List>
            <ComposeMail open={openDrawer} />
        </Container>
    )
}

export default SideBarContent;