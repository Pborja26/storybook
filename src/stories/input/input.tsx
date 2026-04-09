import { InputProps } from "./input.types";
import { Theme } from "../utils/useTheme";

const Input = ({
  value,
  onChange,
  disabled,
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      disabled={disabled}
      style={{...props}}
    />
  )
}

export default Input;
