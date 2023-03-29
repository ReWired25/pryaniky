import { INoteFieldProps } from './types';

export const NoteField = ({ className, title, value }: INoteFieldProps) => {
  return (
    <p className={className}>
      <span>{title}</span>
      <span>{value}</span>
    </p>
  );
};
