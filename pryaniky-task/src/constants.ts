export const HOST = 'https://test.v5.pryaniky.com';
export const LOGIN_PATH = '/ru/data/v3/testmethods/docs/login/';
export const DATA_PATH = '/ru/data/v3/testmethods/docs/userdocs/get/';
export const CREATE_PATH = '/ru/data/v3/testmethods/docs/userdocs/create/';
export const DELETE_PATH = '/ru/data/v3/testmethods/docs/userdocs/delete/';
export const EDIT_PATH = '/ru/data/v3/testmethods/docs/userdocs/set/';

export const GITHUB_LINK = 'https://github.com/ReWired25';

export const TABLE_FIELDS: { [index: string]: string } = {
  documentStatus: 'Статус',
  employeeNumber: 'Номер',
  documentType: 'Тип',
  documentName: 'Имя',
  companySignatureName: 'Подпись компании',
  employeeSignatureName: 'Подпись сотрудника',
  employeeSigDate: 'Дата подписи компании',
  companySigDate: 'Дата подписи сотрудника',
};

export const DATE_FIELDS = ['employeeSigDate', 'companySigDate'];
