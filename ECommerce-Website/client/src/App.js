import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart, Product, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path= '/cart' component={Cart} />
          <Route exact path= '/product/:id' component={Product} />
          <Route exact path= '/details' component={DetailView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
