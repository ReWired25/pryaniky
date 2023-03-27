import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthMutation } from '../../store/api';
import { Paper, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';

import { Loader } from '../Loader';
import { setUsername } from '../../store/authSlice';

import { FieldValues } from 'react-hook-form/dist/types';
import { IformData } from './types';
import { AppDispatch } from '../../store/types';
import { FieldTypes, FieldMessages, submitValues } from './types';

import styles from './index.module.scss';
const { paper, form, loaderWrapper, loader } = styles;

export const AuthForm = () => {
  const navigate = useNavigate();
  const [auth, { isLoading }] = useAuthMutation();
  const dispath = useDispatch<AppDispatch>();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async ({ username, password }: IformData | FieldValues) => {
    try {
      const response = await auth({ username, password }).unwrap();
      if (response.error_code === 2004) {
        toast.error(submitValues.incorrectPair);
      } else if (response.error_code === 0) {
        localStorage.setItem('pryanikyToken', response.data.token);
        dispath(setUsername({ username: username, token: response.data.token }));
        toast.success(submitValues.successMessage);
        navigate(submitValues.successPath);
      } else {
        throw new Error();
      }
    } catch {
      toast.error(submitValues.serverError);
    }
  };

  return (
    <Paper elevation={3} className={paper}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          error={!!errors[FieldTypes.login]}
          label={
            errors[FieldTypes.login]
              ? (errors[FieldTypes.login].message as string)
              : FieldTypes.loginLabel
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
          type="password"
          error={!!errors.password}
          label={
            errors.password
              ? (errors[FieldTypes.password].message as string)
              : FieldTypes.passwordLabel
          }
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
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!isValid && !isLoading}
        >
          Войти
        </Button>
        {isLoading && <Loader loader={loader} loaderWrapper={loaderWrapper} />}
      </form>
    </Paper>
  );
};
