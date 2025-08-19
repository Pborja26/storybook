import { StyledLabel } from "./label.styled";
import { LabelProps } from "../types/typesIndex";

const Label = ({
  label,
  size = 12,
  weight = 400,
  color,
  style,
  bgcolor,
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
      bgcolor={bgcolor}
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
