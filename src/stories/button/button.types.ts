import { BaseStyleProps } from "../types/baseProps.types";

export interface ButtonProps extends BaseStyleProps {
  onClick: () => void;
  children: React.ReactNode;
}