
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{marginTop: 64}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailView} />
          <Route exact path='/create' component={CreatePost} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
