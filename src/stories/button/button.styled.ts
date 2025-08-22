import styled from "styled-components";
import { ButtonProps } from "../types/typesIndex";
import { Theme } from "../utils/useTheme";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius || "4px"};
  color: ${(props) => props.color || "#000"};
  border: 2px solid ${(props) => props.disabled ? Theme.feedback.disabled : props.bgColor};
  background-color: ${(props) => props.disabled ? Theme.feedback.disabled : props.bgColor || "transparent"};
  cursor: ${(props) => props.disabled ? "not-allowed" : props.loading ? "wait" : "pointer"};

  &:hover {
    background-color: ${(props) => props.hoverColor};
    border-color: ${(props) => props.hoverColor};
  }

  &:active {
    transform: ${(props) => props.disabled || props.loading ? "null" : "translate(1px, 1px)"};
  }
`;
