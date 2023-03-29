import { ITableFieldProps } from './types';

export const TableField = ({ className, title, value }: ITableFieldProps) => {
  return (
    <p className={className}>
      <span>{title}</span>
      <span>{value}</span>
    </p>
  );
};
