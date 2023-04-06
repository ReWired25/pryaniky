import { Controller } from 'react-hook-form';
import { DateField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { IEditDateNoteFieldProps, dateValidation } from './types';
import { DateValidationError } from '@mui/x-date-pickers';

export const EditDateNoteField = ({
  dateValue,
  control,
  className,
  name,
  labelText,
  errors,
  errorHandler,
  clearErrorHandler,
}: IEditDateNoteFieldProps) => {
  const fieldErrorHandler = (error: DateValidationError) => {
    if (error) {
      errorHandler(name, { type: dateValidation.type, message: dateValidation.message });
    } else {
      clearErrorHandler(name);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true, validate: () => !errors[name] }}
      render={({ field: { onChange } }) => {
        return (
          <DateField
            size="small"
            variant="standard"
            fullWidth
            name={name}
            className={className}
            label={labelText}
            color="secondary"
            onChange={onChange}
            onError={fieldErrorHandler}
            defaultValue={dateValue && dayjs(dateValue)}
          />
        );
      }}
    />
  );
};
