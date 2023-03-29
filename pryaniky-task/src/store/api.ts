import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HOST, LOGIN_PATH, DATA_PATH, CREATE_PATH, DELETE_PATH, EDIT_PATH } from '../constants';

import {
  IgetData,
  IauthRequest,
  IauthResponse,
  IchangeNoteResponse,
  Idata,
  IeditNoteRequest,
} from './types';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: HOST,
    prepareHeaders: (headers) => {
      const currentToken = localStorage.getItem('pryanikyToken');
      if (currentToken) {
        headers.set('x-auth', `${currentToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth', 'data'],
  endpoints: (build) => ({
    auth: build.mutation<IauthResponse, IauthRequest>({
      query: (body) => ({
        url: LOGIN_PATH,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
    getData: build.query<IgetData, void>({
      query: () => ({
        url: DATA_PATH,
        method: 'GET',
      }),
      providesTags: ['data'],
    }),
    createNote: build.mutation<IchangeNoteResponse, Idata>({
      query: (body) => ({
        url: CREATE_PATH,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['data'],
    }),
    deleteNote: build.mutation<IchangeNoteResponse, string>({
      query: (id) => ({
        url: `${DELETE_PATH}${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['data'],
    }),
    editNote: build.mutation<IchangeNoteResponse, IeditNoteRequest>({
      query: ({ body, id }) => ({
        url: `${EDIT_PATH}${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['data'],
    }),
  }),
});

export const {
  useAuthMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useEditNoteMutation,
  useGetDataQuery,
} = commonApi;
