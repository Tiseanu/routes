import { Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:pid">
            <Product />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
