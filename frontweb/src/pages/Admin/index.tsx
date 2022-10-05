import Navbar from './Navbar';
import './styles.css';
import { Switch, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <Route path="/admin/products">
            <h1>CRUD de produtos</h1>
          </Route>
          <Route path="/admin/categories">
            <h1>CRUD de categorias</h1>
          </Route>
          <Route path="/admin/users">
            <h1>CRUD de usuários</h1>
          </Route>
        </Switch>
      </div>
    </div>
    
  );
};

export default Admin;
