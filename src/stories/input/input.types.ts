import { BaseStyleProps } from "../types/baseProps.types";

export interface InputProps extends BaseStyleProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}