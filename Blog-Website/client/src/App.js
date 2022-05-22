
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
// import AppWithRouterAccess from './AppWithRouterAccess ';
import ContextProvider from './context/ContextProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        {/* <AppWithRouterAccess/> */}
        <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={DetailView} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update/:id' component={Update} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
