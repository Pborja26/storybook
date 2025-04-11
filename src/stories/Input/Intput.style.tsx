import styled from 'styled-components';
import { InputProps } from './Input.types';

export const InputComponent = styled.input<InputProps>`
  border: 1px solid ${(props) => 
      props.disabled ? "#000" 
      : props.required && props.error 
      ? "#dc1717" 
      : "#ccc" };
  border-radius: 8px;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.disabled ? "#ccc" : "inherit" };
  cursor: ${(props) => props.disabled ? "not-allowed" : "inherit" };
`

export const InputLabel = styled.p<InputProps>`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  color: ${(props) =>
    props.disabled 
    ? "#000" 
    :  props.required && props.error
    ? "#dc1717"
    : "#093fc8"};
  border: 0;
  margin: 0;
`

export const InputSublabel = styled.p<InputProps>`
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  color: ${(props) => props.disabled 
    ? "#000" 
    :   props.disabled 
    ? "#000" 
    :  props.required && props.error
    ? "#dc1717"
    : "#093fc8"};
  border: 0;
  margin: 0;
`
