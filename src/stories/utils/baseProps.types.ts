import * as types from "./typeUtils";

export interface BaseProps {
  onClick?: () => void;
  height?: string;
  width?: string;
  padding?: string;
  radius?: string;
  color?: string;
  bgColor?: string;
  gap?: string;
  size?: number;
  justify?: types.JustifyValues;
  align?: types.AlignValues;
  cursor?: types.CursorValues;
  display?: types.DisplayValues;
  direction?: types.DirectionValues;
  position?: types.PositionValues;
}