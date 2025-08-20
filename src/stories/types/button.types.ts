export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
  padding?: string;
  radius?: string;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  loading?: boolean;
}
