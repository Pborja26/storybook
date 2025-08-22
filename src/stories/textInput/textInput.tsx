import { TextInputProps } from "../types/textInput.types";
import { StyledTextInput } from "./textInput.styled";

const TextInput = ({
  value,
  onChange,
  required,
  error
}: TextInputProps) => {
  return (
    <StyledTextInput
      value={value}
      onChange={onChange}
    />
  )
}