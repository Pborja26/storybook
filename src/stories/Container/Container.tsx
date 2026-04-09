import { ContainerProps } from "./container.types";

const Container = ({
  children,
  onClick,
  ...props
}: ContainerProps) => {
  return (
    <div
      onClick={onClick}
      style={{ ...props }}
    >
      {children}
    </div>
  )
};

export default Container;
