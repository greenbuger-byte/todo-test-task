import PropTypes from "prop-types";

import { StyledSelect, InputLabel, InputContainer} from "./Input.styles";

const Select = ({options, label}) => {
    return (
        <InputContainer>
            { label && <InputLabel>{label}</InputLabel>}
            <StyledSelect>
                <option>dssd</option>
                <option>dfffff</option>
            </StyledSelect>
        </InputContainer>
    );
};

Select.propTypes = {
    /* список опции */
    options: PropTypes.array,
    /* название селекта */
    label: PropTypes.string,
}

export default Select;