import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

import { ILayoutProps } from './types';

import styles from './index.module.scss';
const { layoutContainer } = styles;

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={layoutContainer}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
