import { LinearProgress } from '@mui/material';

import { ILoaderProps } from './types';

export const Loader = ({ loader, loaderWrapper }: ILoaderProps) => {
  return (
    <div className={loaderWrapper}>
      <LinearProgress className={loader} color="secondary" />
    </div>
  );
};
