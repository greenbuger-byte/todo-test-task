import { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";

import {
    Error,
    InputContainer,
    InputLabel,
    InputStyled,
    InputTextarea,
} from "./Input.styles";

const Input = forwardRef((props, ref) => {
    const { type, name, placeholder, label, value, inputHandler, errors, padding, ...remainingProps } = props;
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleOnChange = (ev) => {
        setInputValue(ev.target.value);
        inputHandler?.(ev);
    };

    if(type === 'textarea') return (
        <InputContainer padding={padding}>
            {label && <InputLabel>{label}</InputLabel>}
            <InputTextarea
                ref={ref}
                value={inputValue}
                name={name}
                {...remainingProps}
                placeholder={placeholder}
                withError={!!errors}
                onChange={handleOnChange}
            />
            {errors && <Error>{errors}</Error>}
        </InputContainer>
    );
    return (
        <InputContainer>
            {label && <InputLabel>{label}</InputLabel>}
            <InputStyled
                ref={ref}
                type={type}
                withError={!!errors}
                placeholder={placeholder}
                value={inputValue}
                name={name}
                onChange={handleOnChange}
                {...remainingProps}
            />
            {errors && <Error>{errors}</Error>}
        </InputContainer>

    );

});

Input.propTypes = {
    /* тип поля ввода */
    type: PropTypes.oneOf(["text", "number", "textarea", "checkbox", "radio", "password"]),
    /* имя поля ввода */
    name: PropTypes.string,
    /* описание поля ввода*/
    placeholder: PropTypes.string,
    /* значение по умолчанию */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /* ошибка */
    error: PropTypes.string,
    /* handler слежения за полем */
    inputHandler: PropTypes.func,
    /* отступ блока с инпутом */
    padding: PropTypes.string
}

Input.defaultProps = {
    padding: '1',
}

export default Input;