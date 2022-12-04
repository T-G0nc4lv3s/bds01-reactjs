import jwtDecode from 'jwt-decode';
import { Role } from 'types/role';
import { getAuthData } from 'util/storage';

export type tokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
  };
  
  export const getTokenData = (): tokenData | undefined => {
    try {
      return jwtDecode(getAuthData().access_token) as tokenData;
    } catch (error) {
      return undefined;
    }
  };