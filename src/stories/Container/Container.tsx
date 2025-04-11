import { ContainerComponent } from "./Container.style";
import { ContainerProps } from "./Conteinar.types";

const Container = ({
    height,
    width = "100%",
    maxHeight,
    maxWidth,
    padding,
    radius,
    direction,
    overflowX,
    overflowY,
    alignItems =  "center",
    justifyContent = "center",
    border = "1px solid #0000",
    children,
    gap
}: ContainerProps) => {
    return (
        <ContainerComponent
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            padding={padding}
            radius={radius}
            direction={direction}
            overflowX={overflowX}
            overflowY={overflowY}
            alignItems={alignItems}
            justifyContent={justifyContent}
            border={border}
            gap={gap}
        >
            {children}
        </ContainerComponent>
    )
};

export default Container;
