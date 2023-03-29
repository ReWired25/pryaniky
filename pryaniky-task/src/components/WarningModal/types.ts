import { Dispatch, SetStateAction } from 'react';

export interface IWarningModal {
  handler: (idValue?: string) => void;
  logoutState?: Dispatch<SetStateAction<boolean>>;
  noteState?: Dispatch<SetStateAction<string | null>>;
  loadingStatus?: boolean;
  idValue?: string;
}
