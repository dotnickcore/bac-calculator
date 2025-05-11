import type { FieldValues } from "react-hook-form";
import type { InputProps } from "../../types/InputProps";

function Input<T extends FieldValues>({ 
  name, 
  register, 
  type = "text", 
  placeholder 
}: InputProps<T>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input