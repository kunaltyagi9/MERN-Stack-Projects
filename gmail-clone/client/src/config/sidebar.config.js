

import { routes } from "../routes/routes"
import { Photo, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined } from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
        path: routes.home.path
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
        path: routes.home.path
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
        path: routes.home.path
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
        path: routes.home.path
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined,
        path: routes.home.path
    }
];