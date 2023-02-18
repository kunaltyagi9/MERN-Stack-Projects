import { lazy } from 'react';
import SentMails from '../pages/SentMails';

const Main = lazy(() => import('../pages/Main'));
const Home = lazy(() => import('../pages/Home'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    home: {
        path: '/inbox',
        element: Home,
    },
    invalid: {
        path: '/*',
        element: Home
    }
}

export { routes };