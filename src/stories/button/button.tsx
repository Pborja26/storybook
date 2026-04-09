import { ButtonProps } from "./button.types";

const Button = ({
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={props}
    >
      {children}
    </button>
  )
}

export default Button;
