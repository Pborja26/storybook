import { StyledLabel } from "./label.styled";
import { LabelProps } from "../types/typesIndex";

const Label = ({
  label,
  size = 20,
  weight = 400,
  color,
  style,
  bgColor,
  padding,
  radius,
  width,
  height
}: LabelProps) => {
  return (
    <StyledLabel
      size={size}
      weight={weight}
      color={color}
      style={style}
      bgColor={bgColor}
      padding={padding}
      radius={radius}
      width={width}
      height={height}
    >
      {label}
    </StyledLabel>
  )
};

export default Label;
