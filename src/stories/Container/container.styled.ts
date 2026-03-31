import styled from "styled-components";
import { ContainerProps } from "./container.types";

export const StyledContainer = styled.div<ContainerProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  height: ${(props) => props.height || "fit-content"};
  width: ${(props) => props.width || "fit-content"};
  max-height: ${(props) => props.maxHeight || "100%"};
  max-width: ${(props) => props.maxWidth || "100%"};
  padding: ${(props) => props.padding || "10px"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  border: ${(props) => props.border || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  overflow-x: ${(props) => props.overflowX || "auto"};
  overflow-y: ${(props) => props.overflowY || "auto"};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "center"};
  cursor: ${(props) => props.cursor || "default"};
  position: relative;
`;
