import PropTypes from "prop-types";

import {FlashMessageWrapper} from "./FlashMessage.styles";

const FlashMessage = (props) => {
    const { variant, message, full } = props;
    return (
        <FlashMessageWrapper variant={variant} full={full}>
            {message}
        </FlashMessageWrapper>
    );
};

FlashMessage.propStyles = {
    /* цвет сообщения */
    variant: PropTypes.oneOf(["alert", "positive", "default", "light"]),
    /* текст сообщения */
    message: PropTypes.string,
    /* по всей ширине */
    full: PropTypes.bool,
}

FlashMessage.defaultProps = {
    variant: "alert",
}

export default FlashMessage;