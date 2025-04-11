import { SkeletonDiv } from "./Skeleton.style";
import { SkeletonProps } from "./Skeleton.types";

const Skeleton = ({
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    radius
}: SkeletonProps) => {
    return (
        <SkeletonDiv
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            minHeight={minHeight}
            minWidth={minWidth}
            radius={radius}
        />
    )
}

export default Skeleton;
