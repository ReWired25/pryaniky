import { Dispatch, SetStateAction } from 'react';
import { IdataId } from '../../store/types';

export interface ICreateEditNoteProps {
  noteData?: IdataId;
  editHandler?: Dispatch<SetStateAction<IdataId | null>>;
  createHandler?: Dispatch<SetStateAction<boolean>>;
}
