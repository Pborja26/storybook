export interface LabelStyleProps {
  size: number;
  weight: number;
  color?: string;
  style?: React.CSSProperties;
  bgcolor?: string;
  padding?: string;
  radius?: string;
  width?: string;
  height?: string;
}

export interface LabelProps extends LabelStyleProps {
  label: string;
}
