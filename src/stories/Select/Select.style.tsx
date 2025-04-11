import styled from "styled-components";
import { SelectProps } from "./Select.types";

export const Container = styled.div<SelectProps>`
    position: relative;
    width: 300px;
`

export const SelectLabel = styled.p<SelectProps>`
    margin: 0;
    border: 0;
    font-size: 14px;
    color: ${(props) => props.disabled 
        ? "#000"
        : props.required && props.error
        ? "#dc1717"
        : "#093fc8"}
`

export const SelectInput = styled.input<SelectProps>`
    width: 98%;
    padding: 10px 5px;
    cursor: pointer;
`

export const OptionsContainer = styled.div<SelectProps>`
    position: absolute;    
    background-color: #fff;
    width: 100%;
    height: fit-content;
    display: ${(props) => props.isOpen ? "flex" : "none" };
    flex-direction: column;
    box-shadow: 0px 4px 8px 0px;
    border-radius: 8px;
    padding: 10px 5px;
    gap: 5px;
`
