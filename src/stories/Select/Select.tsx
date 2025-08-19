import * as select from "./select.styled";
import Label from "../label/label";
import Container from "../container/container";
import { SelectProps } from "../types/typesIndex";

const Select = ({
  options,
  value,
  setValue,
  width,
  disabled,
  required
}: SelectProps) => {
  return (
    <Container
      display="flex"
      direction="column"
      align="flex-start"
      justify="center"
      maxwidth={width}
      gap="3px"
    >
      <Label
        label="Teste Label"
        size={16}
        weight={600}
      />
      <select.StyledSelectInput
        value={value.label}
      />
      {options.map((option) => (
        <select.StyledSelectItem
          key={option.value}
          onClick={() => setValue(option)}
        >

        </select.StyledSelectItem>
      ))}
    </Container>
  )
};

export default Select;
