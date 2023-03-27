import { useForm } from 'react-hook-form';
import { Paper, TextField, Button } from '@mui/material';

import { FieldValues } from 'react-hook-form/dist/types';
import { IformData } from './types';
import { FieldTypes, FieldMessages } from './types';

import styles from './index.module.scss';
const { paper, form } = styles;

export const AuthForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: IformData | FieldValues) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Paper elevation={3} className={paper}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          error={!!errors[FieldTypes.login]}
          label={
            errors[FieldTypes.login] ? (errors.login.message as string) : FieldTypes.loginLabel
          }
          variant="outlined"
          color="secondary"
          {...register(FieldTypes.login, {
            required: {
              value: true,
              message: FieldMessages.loginValid,
            },
            minLength: {
              value: 4,
              message: FieldMessages.loginMin,
            },
            maxLength: {
              value: 10,
              message: FieldMessages.loginMax,
            },
          })}
          name={FieldTypes.login}
        />
        <TextField
          fullWidth
          error={!!errors.password}
          label={errors.password ? (errors.password.message as string) : FieldTypes.passwordLabel}
          variant="outlined"
          color="secondary"
          {...register(FieldTypes.password, {
            required: {
              value: true,
              message: FieldMessages.passwordValid,
            },
            minLength: {
              value: 7,
              message: FieldMessages.passwordMin,
            },
          })}
          name={FieldTypes.password}
        />
        <Button variant="contained" color="secondary" type="submit" disabled={!isValid}>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
