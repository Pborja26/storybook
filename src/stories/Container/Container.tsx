import { StyledContainer } from "./container.styled";
import { ContainerProps } from "./container.types";

const Container = ({
  display = "flex",
  direction,
  children,
  height = "fit-content",
  width = "fit-content",
  padding,
  borderRadius,
  maxHeight,
  maxWidth,
  backgroundColor,
  border,
  overflowX,
  overflowY,
  gap,
  alignItems,
  justifyContent,
  cursor, 
  onClick,
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer
      display={display}
      direction={direction}
      height={height}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
      border={border}
      overflowX={overflowX}
      overflowY={overflowY}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      onClick={onClick}
      cursor={cursor}
      style={{ ...props }}
    >
      {children}
    </StyledContainer>
  )
};

export default Container;
