import { SwitchProps } from "./switch.types";
import { Theme } from "../utils/useTheme";
import Container from "../Container/Container";

const Switch = ({
  onChange,
  value,
  ...props
}: SwitchProps) => {

  return (
    <Container
      onClick={() => onChange(!value)}
      display="flex"
      flexDirection="row"
      padding={Number(props.width) / 4}
      borderRadius={props.width}
      width={Number(props.width) * 2.2}
      backgroundColor={
        value 
          ? Theme.feedback.success
          : Theme.feedback.disabled 
      }
      justifyContent={
        value 
          ? "flex-end"
          : "flex-start"
      }
      cursor={props.cursor}
    >
      <div 
        style={{
          width: props.width,
          height: props.width,
          backgroundColor: Theme.neutral.white,
          borderRadius: props.width
        }}
      />
    </Container>
  )
}

export default Switch;
