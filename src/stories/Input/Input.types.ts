export interface InputProps {
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    type?: "text" | "date" | "time";
    style?: React.CSSProperties;
    required?: boolean;
    label?: string;
    subLabel?: string;
    error?: boolean;
}
