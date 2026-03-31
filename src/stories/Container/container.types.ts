import { BaseStyleProps } from "../types/baseProps.types";

export interface ContainerProps extends BaseStyleProps {
  children: React.ReactNode;
  onClick?: () => void;
}
