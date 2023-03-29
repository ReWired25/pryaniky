import { Authorization } from '../Layout/Authorization';
import { Table } from '../Layout/Table';
import { Redirect } from './redirect';

export const ROUTES_PAGES = [
  {
    path: '/auth',
    page: (
      <Redirect>
        <Authorization />
      </Redirect>
    ),
  },
  {
    path: '/table',
    page: (
      <Redirect>
        <Table />
      </Redirect>
    ),
  },
  {
    path: '/',
    page: (
      <Redirect>
        <Authorization />
      </Redirect>
    ),
  },
];
