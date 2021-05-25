import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/cart' component={Cart} />
            {/* <Route exact path= '/product/:id' component={Product} /> */}
            <Route exact path= '/product/:id' component={DetailView} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
