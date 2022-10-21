import './styles.css';
import Navbar from './Navbar';
import Users from './Users';

import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <h1>CRUD de produtos</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>CRUD de categorias</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users">
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
