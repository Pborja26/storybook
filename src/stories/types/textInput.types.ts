import { BaseProps } from "../utils/baseProps.types";

export interface TextInputProps extends BaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}
