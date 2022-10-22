import { createContext } from 'react';
import { tokenData } from 'util/requests';

export type AuthContextData = {
  authenticated: boolean;
  tokenData?: tokenData;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
  authContextData: {
    authenticated: false,
  },
  setAuthContextData: () => null,
});
