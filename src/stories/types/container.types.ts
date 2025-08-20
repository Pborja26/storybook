import * as types from "../utils/typeUtils";

export interface ContainerProps {
  display: types.DisplayValues;
  direction: types.DirectionValues;
  children: React.ReactNode;
  justify?: types.JustifyValues;
  align?: types.AlignValues;
  overflowX?: types.OverflowValues;
  overflowY?: types.OverflowValues;
  style?: React.CSSProperties;
  onClick?: () => void;
  height?: string;
  width?: string;
  padding?: string;
  radius?: string;
  maxheight?: string;
  maxwidth?: string;
  bgcolor?: string;
  border?: string;
  gap?: string;
}
