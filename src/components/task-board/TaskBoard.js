import { useState } from "react";
import Avatar from "react-avatar";
import ReactTooltip from 'react-tooltip';
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { BiTime } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import STATUSES from "../../utils/statuses";
import TaskView from "./task-view";
import Modal from "../modal";
import Priority from "../priority/Priority";

import useWhiteSpaces from "../../hooks/useWhiteSpaces";
import useHumanTime from "../../hooks/useHumanTime";

import { mapCommonStates } from "../../utils/store";

import {
    AuthorAvatar,
    CardButtons,
    CardContent,
    CardDescription,
    CardDrag,
    CardDragWrapper,
    CardResponsible,
    CardResponsibleContainer,
    CardStatusChange,
    CardStatusItem,
    CardTime,
    CardTitle,
    CardWrapper,
    ExpiredMessage
} from "./TaskBoard.styles";

const TaskBoard = (props) => {
    const { task, updateStatusTask, patchTask } = props;
    const { t } = useTranslation();
    const EXPIRES = [STATUSES[0].value, STATUSES[1].value];
    const [{ beginDrag }, drag] = useDrag(()=>({
        type: "div",
        item: { task: task }
    }));
    const [isModalShow, setIsModalShow] = useState();
    const [onCard, setOnCard] = useState(false);
    const { author } = task;
    const { responsible } = task;
    const whiteSpace = useWhiteSpaces();
    const humanTime = useHumanTime();
    const expired =  EXPIRES.includes(task.status) && Date.now() > new Date(task.end_date).getTime();

    const changeStatusHandler = (ev, value) =>{
        ev.stopPropagation();
        updateStatusTask({newStatus: value , task});
        patchTask(task._id, { type: "status", value });
    }

    const showModal = () => {
        setIsModalShow(true);
    }

    const renderResponsible = responsible && responsible.map(respUser => (
        <CardResponsible key={respUser._id}>
            <Avatar
                data-tip={respUser.name || respUser.login}
                name={respUser.name || respUser.login}
                size={24}
                round
            />
       </CardResponsible>
    ));

    return (
        <CardWrapper
            onMouseLeave={() => setOnCard(false)}
            onMouseEnter={() => setOnCard(true)}
            onClick={showModal}
        >
            { onCard && <CardStatusChange>
                {STATUSES.map( (status, index) => (
                    <CardStatusItem
                        key={index}
                        onClick={(ev) => changeStatusHandler(ev, status.value)}
                        current={task.status === status.value}
                        data-tip={status.name}
                        color={status.color}
                    />
                    ))}
            </CardStatusChange> }
            <CardDrag
                ref={drag}
                expired={expired}
                status={task.status}
                isDrag={beginDrag}
            >
                <CardDragWrapper >
                    <CardContent >

                        <CardTitle>
                            <AuthorAvatar
                                name={author?.name || author?.login}
                                size={15}
                                round
                            />
                            {task.title}
                        </CardTitle>
                        {expired && <ExpiredMessage>{t('task.expired_task')}</ExpiredMessage>}
                        <CardResponsibleContainer>
                            {renderResponsible}
                        </CardResponsibleContainer>
                    </CardContent>
                    <CardButtons>
                      <CardTime> <BiTime />{humanTime(task.end_date)} </CardTime>
                        <Priority currentPriority={task.priority} />
                    </CardButtons>
                </CardDragWrapper>
                <CardDescription>{whiteSpace(task.description)}</CardDescription>
            </CardDrag>
            <Modal
                title={task.title}
                isOpenModalHandler={setIsModalShow}
                isModalShow={isModalShow}>
                <TaskView task={task} />
            </Modal>
            <ReactTooltip />
        </CardWrapper>
    );
};

TaskBoard.propTypes = {
    /* задача */
    task: PropTypes.object,
}

export default mapCommonStates(TaskBoard);