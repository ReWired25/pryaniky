import { Authorization } from '../Layout/Authorization';
import { Table } from '../Layout/Table';
import { Redirect } from './redirect';

export const ROUTES_PAGES = [
  {
    path: '/auth',
    page: <Authorization />,
  },
  {
    path: '/table',
    page: <Table />,
  },
  {
    path: '/',
    page: <Redirect />,
  },
];
