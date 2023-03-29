import { Dispatch, SetStateAction } from 'react';

export interface IWarningModal {
  handler: (idValue: string) => void;
  modalState: Dispatch<SetStateAction<string | null>>;
  loadingStatus: boolean;
  idValue: string;
}
