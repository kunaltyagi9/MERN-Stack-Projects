

import { routes } from "../routes/routes"
import { Photo, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined,
    MailOutlined } from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
        path: routes.emails.path
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
        path: routes.emails.path
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
        path: routes.emails.path
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
        path: routes.emails.path
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined,
        path: routes.emails.path
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutlined,
        path: routes.emails.path
    }
];