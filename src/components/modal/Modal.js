import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';

import {
    ModalBackground,
    ModalBody,
    ModalClose, ModalContent,
    ModalDescription,
    ModalTitle
} from "./Modal.styles";

const Modal = ({children, title, isOpenModalHandler, isModalShow}) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(isModalShow)
    }, [setIsShow, isModalShow])

    const closeModalHandler = (event) => {
        event.stopPropagation();
        if(isOpenModalHandler) isOpenModalHandler(false)
        setIsShow(false);
    }

    const modalStopClosed = (event) => {
        event.stopPropagation();
    }

    return (
        <>
            {isShow && <ModalContent>
                <ModalBackground  onClick={(event) => closeModalHandler(event)}/>
                <ModalBody onClick={(event) => modalStopClosed(event)}>
                    <ModalTitle>
                        {title}
                    </ModalTitle>
                    <ModalClose onClick={(event) => closeModalHandler(event)}>
                        <BiX size={20} />
                    </ModalClose>
                    <ModalDescription>{children}</ModalDescription>
                </ModalBody>
                </ModalContent>
            }
        </>
    );
};

Modal.propTypes = {
    /* название окна */
    title: PropTypes.string,
    /* содержимое окна */
    children: PropTypes.node,
    /* handler для управление статусом окна */
    isOpenModalHandler: PropTypes.func,
    /* статус окна */
    isModalShow: PropTypes.bool,
}

export default Modal;