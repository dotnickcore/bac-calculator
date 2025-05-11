import type { FieldValues } from "react-hook-form";
import type { SelectProps } from "../../types/SelectProps";

export function Select<T extends FieldValues>({ 
  name, 
  register, 
  options 
}: SelectProps<T>) {
  return (
    <select {...register(name)} className="w-full p-2 border border-gray-300 rounded-md">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
