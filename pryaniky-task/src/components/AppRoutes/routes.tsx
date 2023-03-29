import { Authorization } from '../Layout/Authorization';
import { Tables } from '../Layout/Tables';
import { Redirect } from './redirect';

export const ROUTES_PAGES = [
  {
    path: '/auth',
    page: <Authorization />,
  },
  {
    path: '/table',
    page: <Tables />,
  },
  {
    path: '/',
    page: <Redirect />,
  },
];
