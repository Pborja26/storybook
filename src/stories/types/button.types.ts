import { BaseProps } from "../utils/baseProps.types";

export interface ButtonProps extends Omit<BaseProps, "onClick"> {
  onClick: () => void;
  children: React.ReactNode;
  hoverColor?: string;
  disabled?: boolean;
  loading?: boolean;
}
