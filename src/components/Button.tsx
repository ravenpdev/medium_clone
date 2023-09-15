type Color = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'

type FontSize = 'sm' | 'md' | 'lg'

type Variants = 'outlined' | 'filled'

type Type = 'submit' | 'reset' | 'button'

type ButtonProps = {
  children: React.ReactNode
  fontSize?: FontSize
  variant?: Variants
  color?: Color
  type?: Type
  rounded?: boolean
  uppercase?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  fontSize = 'md',
  variant = 'filled',
  color = 'primary',
  type = 'button',
  rounded = true,
  uppercase = false,
  fullWidth = false,
  onClick
}: ButtonProps) => {
  const styles: string[] = []

  if (fontSize === 'sm') {
    styles.push('text-sm')
  } else if (fontSize === 'md') {
    styles.push('text-base')
  } else if (fontSize === 'lg') {
    styles.push('text-lg')
  }

  if (color && variant !== 'outlined') {
    styles.push('text-white')
  }

  if (variant === 'outlined') {
    if (color === 'primary') {
      styles.push('border border-blue-400 text-blue-400 hover:border-blue-500 hover:text-blue-500')
    } else if (color === 'secondary') {
      styles.push(
        'border border-purple-400 text-purple-400 hover:border-purple-500 hover:text-purple-500'
      )
    } else if (color === 'error') {
      styles.push('border border-red-400 text-red-400 hover:border-red-500 hover:text-red-500')
    } else if (color === 'warning') {
      styles.push(
        'border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:text-yellow-500'
      )
    } else if (color === 'info') {
      styles.push('border border-sky-400 text-sky-400 hover:border-sky-500 hover:text-sky-500')
    } else if (color === 'success') {
      styles.push('border border-teal-400 text-teal-400 hover:border-teal-500 hover:text-teal-500')
    }
  } else {
    if (color === 'primary') {
      styles.push('bg-blue-500 hover:bg-blue-400')
    } else if (color === 'secondary') {
      styles.push('bg-purple-500 hover:bg-purple-400')
    } else if (color === 'error') {
      styles.push('bg-red-500 hover:bg-red-400')
    } else if (color === 'warning') {
      styles.push('bg-yellow-500 hover:bg-yellow-400')
    } else if (color === 'info') {
      styles.push('bg-sky-500 hover:bg-sky-400')
    } else if (color === 'success') {
      styles.push('bg-teal-500 hover:bg-teal-400')
    }
  }

  if (rounded) {
    styles.push('rounded')
  }

  if (uppercase) {
    styles.push('uppercase tracking-wider')
  }

  return (
    <button
      className={`px-3 py-2 ${fullWidth ? 'w-full' : ''} ${styles.join(' ')}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
