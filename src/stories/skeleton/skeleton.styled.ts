import styled from "styled-components";
import { SkeletonProps } from "../types/typesIndex";

export const StyledSkeleton = styled.div<SkeletonProps>`
  height: ${(props) => props.width};
  width: ${(props) => props.height};
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
`;
