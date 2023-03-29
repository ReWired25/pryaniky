import { IMainProps } from './types';

import styles from './index.module.scss';
const { main } = styles;

export const Main = ({ children }: IMainProps) => {
  return <main className={main}>{children}</main>;
};
