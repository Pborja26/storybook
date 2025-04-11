export interface ContainerProps {
    height?: string;
    width?: string;
    padding?: string;
    radius?: string;
    maxHeight?: string;
    maxWidth?: string;
    overflowX?: boolean;
    overflowY?: boolean;
    border?: string;
    gap?: string;
    children?: React.ReactNode;
    direction?: "row" | "column";
    alignItems?: "center" | "start" | "end";
    justifyContent?: "center" 
        | "flex-start" 
        | "flex-end" 
        | "space-around"
        | "space-between"
        | "space_evenly";
    
}
