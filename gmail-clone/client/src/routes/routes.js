import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Home = lazy(() => import('../pages/Home'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    home: {
        path: '/emails/inbox',
        element: Home,
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Home
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export { routes };