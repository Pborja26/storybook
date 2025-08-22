import styled from "styled-components";
import { TextInputProps } from "../types/textInput.types";

export const StyledTextInput = styled.input<TextInputProps>`
  width: 100%;
  height: fit-content;
  max-width: ${(props) => props.width};
  
`;
