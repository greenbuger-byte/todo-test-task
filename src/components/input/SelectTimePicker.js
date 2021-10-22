import PropTypes from "prop-types";
import "flatpickr/dist/themes/material_red.css";

import { InputLabel, StyledFlatpickr, InputContainer } from "./Input.styles";


const SelectTimePicker = ({ label, currentDate, setDate }) => {
    return (
        <InputContainer>
            { label && <InputLabel> {label} </InputLabel> }
        <StyledFlatpickr
            data-enable-time
            value={currentDate}
            onChange={([date]) => {
                setDate(date);
            }}
        />
        </InputContainer>
    );
};

SelectTimePicker.propTypes = {
    /* название инпут */
    label: PropTypes.string,
    /* начальное время */
    currentDate: PropTypes.string,
    /* handler даты */
    setDate: PropTypes.func,
}

export default SelectTimePicker;