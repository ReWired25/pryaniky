import { DATE_FIELDS } from '../constants';
import { IdataId } from '../store/types';
import { IconvertDateFields } from './types';

const isZeroNeed = (value: number) => {
  const str = value.toString();
  return str.length < 2 ? `0${str}` : str;
};

export const convertDate = (isoDate: string, isForEdit?: boolean) => {
  const date = new Date(isoDate);
  const day = isZeroNeed(date.getDate());
  const month = isZeroNeed(date.getMonth() + 1);

  return !isForEdit
    ? `${day}.${month}.${date.getFullYear()}`
    : `${date.getFullYear()}-${month}-${day}`;
};

const toIsoDateFunc = (dateValue: string) => new Date(dateValue).toISOString();

export const convertDataFields = (data: IdataId, toIso?: boolean) => {
  const isoFields = Object.keys(data).filter((field) => DATE_FIELDS.includes(field));

  return isoFields.reduce<IconvertDateFields>((obj, current) => {
    const dateField = !toIso ? convertDate(data[current], true) : toIsoDateFunc(data[current]);
    obj[current] = dateField;
    return obj;
  }, {});
};
