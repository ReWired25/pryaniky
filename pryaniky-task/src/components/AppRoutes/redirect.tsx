import { Navigate, useLocation } from 'react-router-dom';

import { IRedirectProps, PATHS } from './types';

export const Redirect = ({ children }: IRedirectProps) => {
  const { pathname } = useLocation();
  const login = localStorage.getItem('pryanikyToken');

  if (pathname === PATHS.AUTH && login) return <Navigate to={PATHS.TABLE} />;
  if (pathname === PATHS.TABLE && !login) return <Navigate to={PATHS.AUTH} />;
  if (pathname === PATHS.ROOT) {
    return login ? <Navigate to={PATHS.TABLE} /> : <Navigate to={PATHS.AUTH} />;
  }

  return children;
};
