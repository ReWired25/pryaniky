import { UseFormSetError, UseFormClearErrors, Control, FieldErrors } from 'react-hook-form';
import { IdataId } from '../../store/types';

export interface IEditDateNoteFieldProps {
  dateValue?: string;
  control: Control<IdataId>;
  className: string;
  labelText: string;
  errors: FieldErrors<IdataId>;
  errorHandler: UseFormSetError<IdataId>;
  clearErrorHandler: UseFormClearErrors<IdataId>;
  name: string;
}

export enum dateValidation {
  type = 'required',
  message = 'Введите корректную дату!',
}
