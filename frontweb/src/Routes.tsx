import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';
import Auth from 'pages/Admin/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect exact from="/admin/auth" to="/admin/auth/login" />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect exact from="/admin" to="/admin/products" />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
