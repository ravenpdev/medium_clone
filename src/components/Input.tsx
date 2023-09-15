type InputType = 'text' | 'email' | 'password'

type InputProps = {
  type: InputType
  name: string
  placeholder?: string
  fullWidth?: boolean
}

export const Input = ({ type, name, placeholder = '', fullWidth = true }: InputProps) => {
  return (
    <input
      className={`rounded-sm border border-gray-300 px-2 py-2 outline-none ${
        fullWidth ? 'w-full' : ''
      }`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}
