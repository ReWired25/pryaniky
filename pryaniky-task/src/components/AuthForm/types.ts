export interface IformData {
  username: string;
  password: string;
}

export enum FieldTypes {
  login = 'username',
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

export enum submitValues {
  errorCode = 2004,
  successCode = 0,

  successPath = '/table',

  incorrectPair = 'Некорректная пара логин — пароль!',
  successMessage = 'Добро пожаловать!',
  serverError = 'Ошибка при обращении к серверу! Попробуйте позже',
}
