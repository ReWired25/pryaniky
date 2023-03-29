import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import { Loader } from '../Loader';
import { EditTableField } from '../EditTableField';
import { useEditNoteMutation, useCreateNoteMutation } from '../../store/api';
import { convertDataFields } from '../../utils/functions';

import { TABLE_FIELDS } from '../../constants';

import { IEditTableProps } from './types';
import { IdataId } from '../../store/types';

import styles from './index.module.scss';
const { editFormContainer, editFormOverlay, editForm, editField, loader, loaderWrapper } = styles;

export const EditTable = ({ tableData, editHandler, createHandler }: IEditTableProps) => {
  const [editNote, { isLoading }] = useEditNoteMutation();
  const [createNote, { isLoading: isLoadingCreate }] = useCreateNoteMutation();

  const currentData = tableData ? { ...tableData, ...convertDataFields(tableData) } : {};
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IdataId>({
    mode: 'onBlur',
    defaultValues: currentData,
  });

  const closeEditForm = () => {
    if (editHandler) editHandler(null);
    if (createHandler) createHandler(false);
  };

  const onSubmit = (data: IdataId) => {
    const isoDateFields = convertDataFields(data, true);
    const newData = {
      ...data,
      ...isoDateFields,
    };

    tableData ? editNote({ body: newData, id: data.id }) : createNote(newData);
    closeEditForm();
  };

  return (
    <div className={editFormContainer}>
      <div className={editFormOverlay} onClick={closeEditForm}></div>
      <form className={editForm} onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(TABLE_FIELDS).map((table, i) => (
          <EditTableField
            key={i}
            className={editField}
            labelText={errors[table] ? (errors[table]?.message as string) : TABLE_FIELDS[table]}
            errorStatus={!!errors[table]}
            register={register}
            name={table}
            isDate={table.includes('Date')}
          />
        ))}
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!isValid && !isLoading}
        >
          {tableData ? 'Изменить' : 'Создать'}
        </Button>
        {(isLoading || isLoadingCreate) && <Loader loader={loader} loaderWrapper={loaderWrapper} />}
      </form>
    </div>
  );
};
