import { StyledSkeleton } from "./skeleton.styled";
import { SkeletonProps } from "../types/typesIndex";

const Skeleton = ({
  width,
  height,
  radius
}: SkeletonProps) => {
  return (
    <StyledSkeleton
      height={height}
      width={width}
      radius={radius}
    />
  )
}

export default Skeleton;
