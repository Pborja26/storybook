export interface SelectProps {
    label?: string;
    onChange?: (value: string) => void;
    value?: string;
    options?: React.ReactNode[];
    valueKeys?: string[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    isLoading?: boolean;
    required?: boolean;
    isOpen?: boolean;
}