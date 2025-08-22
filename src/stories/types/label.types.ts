import { BaseProps } from "../utils/baseProps.types";

export interface LabelStyleProps extends Omit<BaseProps, "size" | "weight"> {
  size: number;
  weight: number;
  style?: React.CSSProperties;
}

export interface LabelProps extends LabelStyleProps {
  label: string;
}
