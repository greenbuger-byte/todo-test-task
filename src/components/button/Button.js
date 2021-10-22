import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = (props) => {
    const { children, label, isNoLabel } = props;
    return (
        <StyledButton {...props} isNoLabel={isNoLabel}> {label || children} </StyledButton>
    );
};

Button.propTypes = {
    /* Во всю ширинц */
    full: PropTypes.bool,
    /* Блокировка кнопки */
    disabled: PropTypes.bool,
    /* Размер кнопки */
    small: PropTypes.bool,
    /* Надпись на кнопке */
    label: PropTypes.string,
    /* Надпись на кнопке как контент */
    children: PropTypes.node,
    /* Вид кнопки */
    variant: PropTypes.oneOf(['primary', 'dark', 'light', 'ghost']),
    /* Тип кнопки */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /* иконка кнопки */
    icon: PropTypes.string,
    /* Текстовое наполенение */
    isNoLabel: PropTypes.bool,
}

Button.defaultProps = {
    variant: 'primary',
    type: 'button',
    isNoLabel: false,
}

export default Button;