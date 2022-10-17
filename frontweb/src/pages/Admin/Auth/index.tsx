import './styles.css';
import { ReactComponent as AuthImg } from 'assets/images/auth-image.svg';
import { Switch, Route } from 'react-router-dom';
import LoginCard from './LoginCard';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no Ts catalog</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda dos seus
          produtos.
        </p>
        <div>
          <AuthImg />
        </div>
      </div>
      <div className="form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <LoginCard />
          </Route>
          <Route path="/admin/auth/signup">
            <h1>Card de signup</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>Card de recover</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
