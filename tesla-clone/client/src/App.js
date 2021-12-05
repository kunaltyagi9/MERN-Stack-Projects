
//components
import Home from './components/Home/Home';
import Signup from './components/Account/Signup';
import Login from './components/Account/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
