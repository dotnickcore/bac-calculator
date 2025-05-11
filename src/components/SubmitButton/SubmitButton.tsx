import type { SubmitButtonProps } from "../../types/SubmitButtonProps"


function SubmitButton({ label, disabled = false }: SubmitButtonProps) {

  return (
    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
      disabled={disabled}>
      {label}
    </button>
  )
}

export default SubmitButton
