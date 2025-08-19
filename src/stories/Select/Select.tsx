import * as select from "./select.styled";
import Label from "../label/label";
import Container from "../container/container";
import { useState } from "react";
import { SelectProps } from "../types/typesIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({
  options,
  value,
  setValue,
  width,
  disabled,
  required,
  label
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        label={label}
        size={16}
        weight={600}
      />
      <Container
        display="flex"
        direction="row"
        padding="0"
        align="center"
        justify="flex-end"
      >
        <select.StyledSelectInput
          value={value.label}
        />
        <FontAwesomeIcon 
          icon={faCaretDown}
          style={{
            position: "absolute",
            marginRight: "10px"
          }}
        />
      </Container>
      {isOpen && (
        options.map((option) => (
          <select.StyledSelectItem key={`select-item-${option.value}`}>

          </select.StyledSelectItem>
        ))
      )}
    </Container>
  )
};

export default Select;
