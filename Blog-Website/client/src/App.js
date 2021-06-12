
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{marginTop: 64}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={DetailView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
