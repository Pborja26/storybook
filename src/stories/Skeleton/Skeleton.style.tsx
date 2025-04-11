import styled from "styled-components";
import { SkeletonProps } from "./Skeleton.types";

export const SkeletonDiv = styled.div<SkeletonProps>`  
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    min-width: ${(props) => props.minWidth};
    min-height: ${(props) => props.minHeight};
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
    border-radius: ${(props) => props.radius};
    background: linear-gradient(90deg, #e0e0e0 25%, #f4f4f4 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
        background-position: -200% 0;
        }
        100% {
        background-position: 200% 0;
        }
    }
`