

// components
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

import { getUser, userLogin } from './redux/features/userSlice';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const reduxUser = useSelector(getUser);

  const dispatch = useDispatch();

  const user = sessionStorage.getItem('user');

  if (!reduxUser.username && user) {
    dispatch(userLogin(JSON.parse(user)));
  }

  return user ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<PrivateRoute />} >
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/profile/:username' element={<PrivateRoute />} >
            <Route path='/profile/:username' element={<Profile />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
