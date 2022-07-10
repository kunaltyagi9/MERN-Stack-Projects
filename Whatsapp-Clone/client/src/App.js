import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import TemplateProvider from './templates/TemplateProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  const clientId = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Suspense fallback={<Loader />}>
              <Messenger/>
            </Suspense>
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
