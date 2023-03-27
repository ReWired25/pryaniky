import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../store/types';

export const Redirect = () => {
  const login = useSelector((state: RootState) => state.auth.userToken);

  return login ? <Navigate to={'/table'} /> : <Navigate to={'/auth'} />;
};
