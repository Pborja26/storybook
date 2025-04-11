import { Text } from "./Label.style";
import { LabelProps } from "./Label.types";

const Label = ({
    variant = "p",
    color,
    fontSize,
    fontWeight,
    style,
    label
}: LabelProps) => {
    return (
        <Text
            variant={variant}
            label={label}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            style={style}
        >
            {label}
        </Text>
    )
};

export default Label;
