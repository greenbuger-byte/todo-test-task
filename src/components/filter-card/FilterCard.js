import PropTypes from "prop-types";

import { FilterCardWrapper } from "./FilterCard.styles";

const FilterCard = ({fill, message, onClickChange, type}) => {

    return (
        <FilterCardWrapper onClick={() => onClickChange?.(type)} fill={fill}>
            {message}
        </FilterCardWrapper>
    );
};

FilterCard.propTypes ={
    /* цвет заливки */
    fill: PropTypes.string,
    /* сообщение */
    message: PropTypes.string,
    /* хендлер нажатия */
    onClickChange: PropTypes.func,
    /* тип блока */
    type: PropTypes.string,
}

export default FilterCard;