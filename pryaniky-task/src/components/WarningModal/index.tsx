import { Button } from '@mui/material';
import { Loader } from '../Loader';

import { IWarningModal } from './types';

import styles from './index.module.scss';
const {
  warningModalWrapper,
  warningModalOverlay,
  warningModal,
  warningModalText,
  warningModalButtonsWrapper,
  loaderWrapper,
  loader,
} = styles;

export const WarningModal = ({
  handler,
  noteState,
  logoutState,
  loadingStatus,
  idValue,
}: IWarningModal) => {
  const acceptHandler = () => {
    idValue ? handler(idValue) : handler();
    modalHandler();
  };

  const modalHandler = () => {
    if (noteState) noteState(null);
    if (logoutState) logoutState(false);
  };

  return (
    <div className={warningModalWrapper}>
      <div className={warningModalOverlay} onClick={modalHandler}></div>
      <div className={warningModal}>
        <p className={warningModalText}>Вы уверены?</p>
        <div className={warningModalButtonsWrapper}>
          <Button variant="contained" color="secondary" onClick={acceptHandler}>
            Да
          </Button>
          <Button color="secondary" onClick={modalHandler}>
            Отмена
          </Button>
        </div>
        {loadingStatus && <Loader loader={loader} loaderWrapper={loaderWrapper} />}
      </div>
    </div>
  );
};
