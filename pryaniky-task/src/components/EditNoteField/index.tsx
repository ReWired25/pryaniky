import { TextField } from '@mui/material';

import { IEditNoteFieldProps } from './types';

export const EditNoteField = ({
  className,
  labelText,
  errorStatus,
  register,
  name,
  isDate,
}: IEditNoteFieldProps) => {
  return (
    <TextField
      className={className}
      size="small"
      variant="standard"
      fullWidth
      label={!isDate ? labelText : ''}
      helperText={isDate && labelText}
      type={isDate ? 'date' : 'text'}
      error={errorStatus}
      color="secondary"
      {...register(name, {
        required: {
          value: true,
          message: 'Заполните поле!',
        },
        maxLength: {
          value: 30,
          message: 'Максимум 30 символов!',
        },
      })}
      name={name}
    />
  );
};
