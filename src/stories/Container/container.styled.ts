import styled from "styled-components";
import { ContainerProps } from "../types/typesIndex";

export const StyledContainer = styled.div<ContainerProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  height: ${(props) => props.height || "fit-content"};
  width: ${(props) => props.width || "fit-content"};
  max-height: ${(props) => props.maxheight || "100%"};
  max-width: ${(props) => props.maxwidth || "100%"};
  padding: ${(props) => props.padding || "10px"};
  border-radius: ${(props) => props.radius || "4px"};
  border: ${(props) => props.border || "none"};
  background-color: ${(props) => props.bgcolor || "transparent"};
  overflow-x: ${(props) => props.overflowX || "auto"};
  overflow-y: ${(props) => props.overflowY || "auto"};
  gap: ${(props) => props.gap || "1px"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "center"};
`;
