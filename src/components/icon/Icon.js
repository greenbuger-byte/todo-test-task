import PropTypes from "prop-types";

import * as icons from './icons';

import { IconWrapper } from "./Icon.styles";

const Icon = (props) => {
    const { name, color, size, ...remainingProps } = props;
    const { direction, isOn } = remainingProps;
    const Elem = icons[name];

    if(!name) return null;

    const renderIcon = () => {
        return <Elem fill={color} {...direction} {...isOn} />
    }
    return (
        <IconWrapper size={size} {...remainingProps} >
            {renderIcon()}
        </IconWrapper>
    )
}

Icon.propTypes = {
    /* название иконки */
    name: PropTypes.string.isRequired,
    /* цвет иконки */
    color: PropTypes.string,
    /* размер иконки */
    size: PropTypes.number
}

export default Icon;