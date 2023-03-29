import { useState } from 'react';
import { CircularProgress, ButtonGroup, Button, Paper } from '@mui/material';

import { Layout } from '..';
import { TableField } from '../../TableField';
import { EditTable } from '../../EditTable';
import { WarningModal } from '../../WarningModal';
import { useGetDataQuery, useDeleteNoteMutation } from '../../../store/api';
import { convertDate } from '../../../utils/functions';

import { DATE_FIELDS, TABLE_FIELDS } from '../../../constants';

import { IdataId } from '../../../store/types';

import styles from './index.module.scss';
const { tablesWrapper, tableCard, tableField, tableButtonGroup, createTableButton, paper } = styles;

export const Tables = () => {
  const [editState, setEditState] = useState<IdataId | null>(null);
  const [deleteState, setDeleteState] = useState<string | null>(null);
  const [createState, setCreateState] = useState(false);
  const { data, isLoading } = useGetDataQuery();
  const [deleteNode, { isLoading: isLoadingDelete }] = useDeleteNoteMutation();

  const createTable = () => setCreateState(true);

  const changeTable = (tableData: IdataId) => {
    setEditState(tableData);
  };

  const deleteTable = (idValue: string) => {
    deleteNode(idValue);
  };

  return (
    <Layout>
      {editState && <EditTable tableData={editState} editHandler={setEditState} />}
      {createState && <EditTable createHandler={setCreateState} />}
      {deleteState && (
        <WarningModal
          modalState={setDeleteState}
          handler={deleteTable}
          loadingStatus={isLoadingDelete}
          idValue={deleteState}
        />
      )}
      <span className={createTableButton}>
        <Button variant="contained" color="secondary" onClick={createTable}>
          Новая Таблица
        </Button>
      </span>
      <div className={tablesWrapper}>
        {isLoading && <CircularProgress color="secondary" />}
        {data?.data &&
          data.data.map((table) => (
            <Paper key={table.id} elevation={3} className={paper}>
              <div className={tableCard}>
                <ButtonGroup
                  className={tableButtonGroup}
                  variant="text"
                  color="secondary"
                  size="small"
                  aria-label="small secondary button group"
                >
                  <Button onClick={() => changeTable(table)}>Изменить</Button>
                  <Button onClick={() => setDeleteState(table.id)}>Удалить</Button>
                </ButtonGroup>
                {Object.keys(table).map((value: string, i) => {
                  if (value === 'id') return;
                  return (
                    <TableField
                      key={i}
                      className={tableField}
                      title={TABLE_FIELDS[value]}
                      value={DATE_FIELDS.includes(value) ? convertDate(table[value]) : table[value]}
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
