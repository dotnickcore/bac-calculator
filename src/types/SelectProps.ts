import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  options: SelectOption[];
}