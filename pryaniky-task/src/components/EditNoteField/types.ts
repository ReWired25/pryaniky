import { UseFormRegister } from 'react-hook-form';
import { IdataId } from '../../store/types';

export interface IEditNoteFieldProps {
  className: string;
  labelText: string;
  errorStatus: boolean;
  register: UseFormRegister<IdataId>;
  name: string;
  isDate?: boolean;
}
