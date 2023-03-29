import logo from '../../../assets/logo-face.svg';

import styles from './index.module.scss';
const { header, appName, appNameText, appLogo } = styles;

export const Header = () => {
  return (
    <header className={header}>
      <div className={appName}>
        <p className={appNameText}>Api app for</p>
        <a href="https://pryaniky.com" target={'_blank'} rel="noreferrer">
          <img className={appLogo} src={logo} alt="пряники" />
        </a>
      </div>
      {/* logout button */}
    </header>
  );
};
