import type { SubmitButtonProps } from "../../types/SubmitButtonProps"


function SubmitButton({ ...props }: SubmitButtonProps) {

  return (
    <button
      className="px-4 py-2 rounded font-medium transition-colors bg-blue-500 hover:bg-blue-600 text-white"
      {...props}
    />
  )
}

export default SubmitButton
