

//components
import Messenger from './components/Messenger';
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import TemplateProvider from './templates/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger/>
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
