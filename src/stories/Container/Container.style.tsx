import styled from "styled-components";
import { ContainerProps } from "./Conteinar.types";

export const ContainerComponent = styled.div<ContainerProps>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    max-height: ${(props) => props.maxHeight};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    overflow-x: ${(props) => props.overflowX ? "auto" : "hidden" };
    overflow-y: ${(props) => props.overflowY ? "auto" : "hidden" };
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.direction};
    border: ${(props) => props.border};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    gap: ${(props) => props.gap};
`
