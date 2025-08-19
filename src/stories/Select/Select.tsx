import Container from "../container/container";
import Label from "../label/label";

const Select = () => {
  return (
    <Container
      display="flex"
      direction="column"
      align="center"
      justify="flex-start"
    >
      <Label
        label="Teste Label"
        size={16}
        weight={600}
      />

    </Container>
  )
};

export default Select;
