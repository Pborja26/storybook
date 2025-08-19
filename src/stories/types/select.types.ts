export type OptionType = {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options: OptionType[];
  value: OptionType;
  setValue: (option: OptionType) => void;
  label: string;
  width?: string;
  disabled?: boolean;
  required?: boolean;
}
