import logo from '../../../assets/logo-face.svg';

import styles from './index.module.scss';
const { header, appName, appNameText, appLogo } = styles;

export const Header = () => {
  return (
    <header className={header}>
      <div className={appName}>
        <p className={appNameText}>Api app for</p>
        <img className={appLogo} src={logo} alt="пряники" />
      </div>
      {/* logout button */}
    </header>
  );
};
