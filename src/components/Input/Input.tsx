import type { FieldValues } from 'react-hook-form';
import type { InputProps } from '../../types/InputProps';

function Input<T extends FieldValues>({
  name,
  register,
  type = 'text',
  placeholder,
}: InputProps<T>) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-md"
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;
