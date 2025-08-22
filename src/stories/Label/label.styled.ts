import styled from "styled-components";
import { LabelStyleProps } from "../types/typesIndex";

export const StyledLabel = styled.p<LabelStyleProps>`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: ${(porps) => porps.padding || "0"};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-contet"};
  margin: 0;
`
