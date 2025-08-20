import styled from "styled-components";
import { ButtonProps } from "../types/typesIndex";
import { Theme } from "../utils/useTheme";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius || "4px"};
  border: 2px solid ${(props) => props.disabled ? Theme.feedback.disabled : props.color};
  background-color: ${(props) => props.disabled ? Theme.feedback.disabled : props.color || "transparent"};
  cursor: ${(props) => props.disabled ? "not-allowed" : props.loading ? "progress" : "pointer"};

  &:hover {
    background-color: ${(props) => props.hoverColor};
    border-color: ${(props) => props.hoverColor};
  }

  &:active {
    transform: translate(1px, 1px);
  }
`;