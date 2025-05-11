import type { FieldValues } from "react-hook-form";
import type { SelectProps } from "../../types/SelectProps";

export function Select<T extends FieldValues>({ 
  name, 
  register, 
  options 
}: SelectProps<T>) {
  return (
    <select {...register(name)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
