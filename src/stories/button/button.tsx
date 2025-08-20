import { StyledButton } from "./button.styled";
import { ButtonProps } from "../types/typesIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Button = ({
  width,
  height,
  color,
  padding,
  hoverColor,
  onClick,
  children,
  disabled,
  loading,
  radius
}: ButtonProps) => {
  function handleClick() {
    if (!disabled && !loading) {
      onClick();
    }
  }

  return (
    <StyledButton
      onClick={() => handleClick()}
      width={width}
      height={height}
      color={color}
      padding={padding}
      hoverColor={hoverColor}
      disabled={disabled}
      radius={radius}
      loading={loading}
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin height={"100%"} width={"100%"} />
      ) : (
        children
      )}
    </StyledButton>
  )
};

export default Button;
