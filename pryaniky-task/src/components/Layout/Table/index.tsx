import { useGetDataQuery } from '../../../store/api';

export const Table = () => {
  const { data, isError, isFetching, isLoading } = useGetDataQuery();
  console.log(data);

  return (
    <div>
      <h2>Table</h2>
    </div>
  );
};
