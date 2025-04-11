import * as styled from "./Select.style";
import Container from "../Container/Container";
import Skeleton from "../Skeleton/Skeleton";
import React, { useState } from "react";
import { SelectProps } from "./Select.types";

const Select = ({
    label = "Label",
    value,
    options,
    valueKeys,
    placeholder,
    disabled,
    error,
    isLoading,
    onChange,
    required = false
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const renderOptions = (options: React.ReactNode[]) => {

    }

    return (
        <styled.Container
            required={required}
            error={error}
            disabled={disabled}
        >
            <Container justifyContent="flex-start">
                <styled.SelectLabel
                    required={required}
                    error={error}
                    disabled={disabled}
                >
                    {label}
                </styled.SelectLabel>
                {required && (
                    <styled.SelectLabel
                        required={required}
                        error={error}
                        disabled={disabled}
                    >
                        *
                    </styled.SelectLabel>
                )}
            </Container>
            <styled.SelectInput 
                type="text"
                value={value}
                onChange={onChange}
                onClick={() => setIsOpen(!isOpen)}
            />
            <styled.OptionsContainer
                isOpen={isOpen}
            >
                {isLoading ? 
                    Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton 
                            key={index} 
                            height="20px" 
                            width="100%" 
                            radius="10px"
                        />
                    )) : ""
                }
            </styled.OptionsContainer>
        </styled.Container>
    )
}

export default Select;
