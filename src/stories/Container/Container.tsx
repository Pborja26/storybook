import { StyledContainer } from "./container.styled";
import { ContainerProps } from "../types/typesIndex";

const Container = ({
  display,
  direction,
  children,
  height,
  width,
  padding,
  radius,
  maxheight,
  maxwidth,
  bgcolor,
  border,
  style,
  overflowX,
  overflowY,
  gap,
  align,
  justify,
  onClick
}: ContainerProps) => {
  return (
    <StyledContainer
      display={display}
      direction={direction}
      height={height}
      width={width}
      padding={padding}
      radius={radius}
      maxheight={maxheight}
      maxwidth={maxwidth}
      bgcolor={bgcolor}
      border={border}
      style={style}
      overflowX={overflowX}
      overflowY={overflowY}
      gap={gap}
      align={align}
      justify={justify}
      onClick={onClick}
    >
      {children}
    </StyledContainer>
  )
};

export default Container;
