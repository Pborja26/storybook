export interface LabelProps {
    variant?: "h1" | "h2" | "h3" | "p"
    label: string;
    color?: string;
    fontSize?: string;
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
    style?: React.CSSProperties;
}
