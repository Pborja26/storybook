import { BaseStyleProps } from "../types/baseProps.types";

export interface SwitchProps extends BaseStyleProps {
  onChange: (e: boolean) => void;
  value: boolean;
}