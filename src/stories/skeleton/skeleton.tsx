import { BaseStyleProps } from "../types/baseProps.types";
import { StyledSkeleton } from "./skeleton.styles";

const Skeleton = ({
  ...props
}: BaseStyleProps) => {
  return (
    <StyledSkeleton
      style={{...props}}
    />
  )
}

export default Skeleton;
