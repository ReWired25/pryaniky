import { Route, Routes } from 'react-router-dom';

import { ROUTES_PAGES } from './routes';

export const AppRoutes = () => {
  return (
    <Routes>
      {ROUTES_PAGES.map(({ path, page }) => (
        <Route key={path} path={path} element={page} />
      ))}
    </Routes>
  );
};
