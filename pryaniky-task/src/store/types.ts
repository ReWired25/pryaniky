import { store } from './store';

export interface IauthPayload {
  type: string;
  payload: { username?: string; token?: string };
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface ResponseStatus {
  error_code: number;
  error_message: string;
}

export interface Idata {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id?: string;
}

export interface IauthRequest {
  username: string;
  password: string;
}

export interface IauthResponse extends ResponseStatus {
  data: {
    token: string;
  };
}

export interface IgetData extends ResponseStatus {
  data: Idata[];
}

export interface IchangeNoteResponse extends ResponseStatus {
  data: Idata;
}

export interface IeditNoteRequest {
  body: Idata;
  id: string;
}
