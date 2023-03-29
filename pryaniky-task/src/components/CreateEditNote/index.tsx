import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

import { Loader } from '../Loader';
import { EditNoteField } from '../EditNoteField';
import { useEditNoteMutation, useCreateNoteMutation } from '../../store/api';
import { convertDataFields } from '../../utils/functions';

import { NOTE_FIELDS } from '../../constants';

import { ICreateEditNoteProps } from './types';
import { submitValues } from '../Layout/Table/types';
import { IdataId } from '../../store/types';

import styles from './index.module.scss';
const { editFormContainer, editFormOverlay, editForm, editField, loader, loaderWrapper } = styles;

export const CreateEditNote = ({ noteData, editHandler, createHandler }: ICreateEditNoteProps) => {
  const navigate = useNavigate();
  const [editNote, { isLoading }] = useEditNoteMutation();
  const [createNote, { isLoading: isLoadingCreate }] = useCreateNoteMutation();

  const currentData = noteData ? { ...noteData, ...convertDataFields(noteData) } : {};
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

  const onSubmit = async (data: IdataId) => {
    const isoDateFields = convertDataFields(data, true);
    const newData = {
      ...data,
      ...isoDateFields,
    };

    try {
      const response = noteData
        ? await editNote({ body: newData, id: data.id }).unwrap()
        : await createNote(newData).unwrap();
      if (response.error_code === submitValues.errorCode) {
        toast.error(submitValues.errorToken);
        navigate(submitValues.errorPath);
      } else if (response.error_code === submitValues.successCode) {
        toast.success(submitValues.successMessage);
      } else {
        throw new Error();
      }
    } catch {
      toast.success(submitValues.serverError);
    }

    closeEditForm();
  };

  return (
    <div className={editFormContainer}>
      <div className={editFormOverlay} onClick={closeEditForm}></div>
      <form className={editForm} onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(NOTE_FIELDS).map((note, i) => (
          <EditNoteField
            key={i}
            className={editField}
            labelText={errors[note] ? (errors[note]?.message as string) : NOTE_FIELDS[note]}
            errorStatus={!!errors[note]}
            register={register}
            name={note}
            isDate={note.includes('Date')}
          />
        ))}
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!isValid && !isLoading}
        >
          {noteData ? 'Изменить' : 'Создать'}
        </Button>
        {(isLoading || isLoadingCreate) && <Loader loader={loader} loaderWrapper={loaderWrapper} />}
      </form>
    </div>
  );
};
