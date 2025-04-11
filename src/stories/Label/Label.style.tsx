import styled from "styled-components";
import { LabelProps } from "./Label.types";

function handleVariant(variant?: string) {
    switch (variant) {
        case "h1":
            return `
                font-size: 2.5rem;
                font-weight: 700;
            `
        case "h2":
            return `
                font-size: 2rem;
                font-weight: 600;
            `
        case "h3":
            return `
                font-size: 1.75rem;
                font-weight: 500;
            `
        case "p":
            return `
                font-size: 1rem;
                font-weight: 400;
            `
        default:
            return `
                font-size: 1rem;
                font-weight: 400;
            `
    }
}

export const Text = styled.p<LabelProps>`
    ${(props) => handleVariant(props.variant)}
    font-family: Roboto;
    text-transform: capitalize;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`
