import type { LabelProps } from "../../types/LabelProps";

function Label({ htmlFor, children }: LabelProps) {
    return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  );
}

export default Label