import * as styled from './Intput.style';
import Container from '../Container/Container';
import { InputProps } from './Input.types';

const Input = ({
    value,
    placeholder,
    type="text",
    style,
    onChange,
    disabled = false,
    required = false,
    label,
    subLabel,
    error
}: InputProps) => {
  return (
        <Container
            direction='column'
            alignItems='start'
            justifyContent='flex-start'
            gap='0px'
        >
            <Container justifyContent='flex-start' gap='5px'>
                <styled.InputLabel
                    required={required}
                    error={error}      
                    disabled={disabled}          
                >
                    {label}    
                </styled.InputLabel>
                {required && (
                    <styled.InputLabel 
                        style={{ color: "red" }}
                    >
                        *
                    </styled.InputLabel>
                )}
            </Container>

            <styled.InputComponent 
                disabled={disabled}
                onChange={!disabled ? onChange : undefined}
                value={value}
                placeholder={placeholder}
                type={type}
                style={style}
                required={required}
                error={error}
            />
            <styled.InputSublabel
                required={required}
                error={error}
                disabled={disabled}
            >
                {subLabel}
            </styled.InputSublabel>
        </Container>
    );
};

export default Input;
