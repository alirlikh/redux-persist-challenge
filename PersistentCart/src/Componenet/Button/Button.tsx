import "./Button.css"

type size = "sm" | "md" | "lg"

type ButtonType = "submit" | "button"

interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: size
  type: ButtonType
  disabled?: boolean
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  className = "",
  size = "md",
  type = "button",
  disabled = false,
  children,
  onClick
}: ButtonProps) => {
  const defaultStyle = `btn ${className} btn-${size}`

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={defaultStyle}>
      {children}
    </button>
  )
}
export default Button
