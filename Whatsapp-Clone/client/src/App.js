

//components
import Messenger from './components/Messenger';
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

function App() {
  return (
    <UserProvider>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </UserProvider>
  );
}

export default App;
