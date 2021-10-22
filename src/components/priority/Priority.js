import {useState} from "react";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

import { BiStar } from "react-icons/bi";
import { red, cloud4, green, white } from "../../theme/colors";

import {
    PriorityTitle,
    PriorityWrapper,
    PriorityCheckbox,
    PriorityContainer,
    PriorityView
} from "./Priority.styles";

const Priority = ({type, currentPriority, setSelected, forDefault }) => {
    const { t } = useTranslation();
    const STARS = {
        low: { color: cloud4, stars: 1, name: "low" },
        common: { color: green, stars: 2, name: "common" },
        high: { color: red, stars: 3, name: "high" },
    }
    const [selectedPriority, setSelectedPriority] = useState(STARS[forDefault]?.name || STARS.low.name);
    const checkedHandler = (checked) => {
        setSelectedPriority(checked);
        setSelected?.(checked);
    }

    const renderStars = (count, color) => Array(count)
        .fill('')
        .map((_, index) => <BiStar key={index} size={10} color={color} />);

    if(type === 'edit'){
        const renderPriorityList =() => Object.entries(STARS).map(([name, star], index) => (
            <PriorityCheckbox key={index}
                              onClick={() => checkedHandler(star.name)}
                              color={star.color}
                              checked={selectedPriority === star.name}
            >
                {renderStars(star.stars, white)}
            </PriorityCheckbox>
        ));
        return (
            <PriorityWrapper>
                <PriorityTitle>{t('priority.title')}</PriorityTitle>
                <PriorityContainer>
                    {renderPriorityList()}
                </PriorityContainer>
            </PriorityWrapper>
        );
    }
        const color = STARS[currentPriority]?.color || STARS.low.color;
        const starsCount = STARS[currentPriority]?.stars || STARS.low.stars;

        return (
            <PriorityView >
                {renderStars(starsCount, color)}
            </PriorityView>
        )
};

Priority.propTypes = {
    /* тип отображения */
    type: PropTypes.string,
    /* актуальный выбор */
    currentPriority: PropTypes.string,
    /* handler выбор приоритета */
    setSelected: PropTypes.func,
    /* входящий приоритет */
    forDefault: PropTypes.string,
}

Priority.defaultProps ={
    currentPriority: 'low',
    forDefault: 'low'
}

export default Priority;