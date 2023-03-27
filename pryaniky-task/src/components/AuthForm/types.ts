export interface IformData {
  name: string;
  password: string;
}

export enum FieldTypes {
  login = 'login',
  loginLabel = 'Логин',

  password = 'password',
  passwordLabel = 'Пароль',
}

export enum FieldMessages {
  loginValid = 'Введите логин!',
  loginMin = 'Логин слишком короткий!',
  loginMax = 'Логин слишком длинный!',

  passwordValid = 'Введите пароль!',
  passwordMin = 'Пароль слишком короткий!',
}
