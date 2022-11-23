import './assets/styles/custom.scss';
import './App.css';
import Routes from 'Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <>
      <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
        <Routes />
        <ToastContainer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
