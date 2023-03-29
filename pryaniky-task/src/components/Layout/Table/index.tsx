import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, ButtonGroup, Button, Paper } from '@mui/material';
import { toast } from 'react-toastify';

import { Layout } from '..';
import { NoteField } from '../../NoteField';
import { CreateEditNote } from '../../CreateEditNote';
import { WarningModal } from '../../WarningModal';
import { useGetDataQuery, useDeleteNoteMutation } from '../../../store/api';
import { convertDate } from '../../../utils/functions';

import { DATE_FIELDS, NOTE_FIELDS } from '../../../constants';

import { IdataId } from '../../../store/types';
import { submitValues } from './types';

import styles from './index.module.scss';
const { notesWrapper, noteCard, noteField, noteButtonGroup, createNoteButton, paper } = styles;

export const Table = () => {
  const navigate = useNavigate();
  const [editState, setEditState] = useState<IdataId | null>(null);
  const [deleteState, setDeleteState] = useState<string | null>(null);
  const [createState, setCreateState] = useState(false);
  const { data, isLoading } = useGetDataQuery();
  const [deleteNote, { isLoading: isLoadingDelete }] = useDeleteNoteMutation();

  const createNote = () => setCreateState(true);

  const changeNote = (noteData: IdataId) => {
    setEditState(noteData);
  };

  const deleteNoteHandler = async (idValue?: string) => {
    if (!idValue) return;
    try {
      const response = await deleteNote(idValue).unwrap();
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
  };

  return (
    <Layout>
      {editState && <CreateEditNote noteData={editState} editHandler={setEditState} />}
      {createState && <CreateEditNote createHandler={setCreateState} />}
      {deleteState && (
        <WarningModal
          noteState={setDeleteState}
          handler={deleteNoteHandler}
          loadingStatus={isLoadingDelete}
          idValue={deleteState}
        />
      )}
      <span className={createNoteButton}>
        <Button variant="contained" color="secondary" onClick={createNote}>
          Новая Запись
        </Button>
      </span>
      <div className={notesWrapper}>
        {isLoading && <CircularProgress color="secondary" />}
        {data?.data &&
          data.data.map((note) => (
            <Paper key={note.id} elevation={3} className={paper}>
              <div className={noteCard}>
                <ButtonGroup
                  className={noteButtonGroup}
                  variant="text"
                  color="secondary"
                  size="small"
                  aria-label="small secondary button group"
                >
                  <Button onClick={() => changeNote(note)}>Изменить</Button>
                  <Button onClick={() => setDeleteState(note.id)}>Удалить</Button>
                </ButtonGroup>
                {Object.keys(note).map((value: string, i) => {
                  if (value === 'id') return;
                  return (
                    <NoteField
                      key={i}
                      className={noteField}
                      title={NOTE_FIELDS[value]}
                      value={DATE_FIELDS.includes(value) ? convertDate(note[value]) : note[value]}
                    />
                  );
                })}
              </div>
            </Paper>
          ))}
      </div>
    </Layout>
  );
};
