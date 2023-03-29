import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { WarningModal } from '../../WarningModal';
import { setUsername } from '../../../store/authSlice';

import { COMPANY_LINK } from '../../../constants';

import { AppDispatch, RootState } from '../../../store/types';

import logo from '../../../assets/logo-face.svg';

import styles from './index.module.scss';
const { header, appName, appNameText, appLogo, profileWrapper, profileName } = styles;

export const Header = () => {
  const [logoutState, setLogoutState] = useState(false);
  const username = useSelector((state: RootState) => state.auth.username);
  const token = localStorage.getItem('pryanikyToken');
  const dispath = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    dispath(setUsername({ username: '', token: '' }));
    navigate('/auth');
  };

  return (
    <header className={header}>
      {logoutState && <WarningModal logoutState={setLogoutState} handler={logout} />}
      <div className={appName}>
        <p className={appNameText}>Api app for</p>
        <a href={COMPANY_LINK} target={'_blank'} rel="noreferrer">
          <img className={appLogo} src={logo} alt="пряники" />
        </a>
      </div>
      {token && (
        <div className={profileWrapper}>
          <p className={profileName}>{username}</p>
          <Button variant="outlined" onClick={() => setLogoutState(true)}>
            Выйти
          </Button>
        </div>
      )}
    </header>
  );
};
