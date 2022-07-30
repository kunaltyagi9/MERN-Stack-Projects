import { useState } from 'react';

import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login  isUserAuthenticated={isUserAuthenticated} />} />

          {/* <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} > */}
            <Route path='/' element={<Home />} />
          {/* </Route> */}

          {/* <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} > */}
            <Route path='/profile' element={<Profile />} />
          {/* </Route> */}
          
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
