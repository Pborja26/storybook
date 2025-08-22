import * as types from "../utils/typeUtils";
import { BaseProps } from "../utils/baseProps.types";

export interface ContainerProps extends BaseProps {
  children: React.ReactNode;
  overflowX?: types.OverflowValues;
  overflowY?: types.OverflowValues;
  style?: React.CSSProperties;
  maxheight?: string;
  maxwidth?: string;
  border?: string;
}
