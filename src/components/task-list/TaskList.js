import PropTypes from "prop-types";
import { BiPlus } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { useDrop } from "react-dnd";

import Button from "../button";
import TaskBoard from "../task-board";
import FlashMessage from "../flash-message";

import { mapCommonStates } from "../../utils/store";

import { TaskListColumn, TaskListTitle, TaskListWrapper } from "./TaskList.styles";

const TaskList = (props) => {
    const { title, status, tasks, patchTask, updateStatusTask, taskState, withStatus } = props;
    const { isLoading } = taskState;
    const randomSkeletons = 1 + Math.floor(Math.random() * 5);
    const  [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addTaskDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));
    const addTaskDrop = (item) => {
        patchTask(item.task._id, { type: 'status', value: status });
        updateStatusTask({newStatus: status, task: item.task})
    }
    const renderTask = tasks && tasks.length ?
            tasks.map( task => (<TaskBoard key={task._id} task={task}/>))
            : <FlashMessage variant="light" message={'Нет задач'} />;

    return (
        <TaskListColumn ref={drop} isOver={isOver}>
            <TaskListTitle>{title}</TaskListTitle>
            <Button onClick={() => withStatus(status)} variant="light"><BiPlus /></Button>
            <TaskListWrapper >
                {isLoading ? <Skeleton count={randomSkeletons} height={120}/> : renderTask}
            </TaskListWrapper>
        </TaskListColumn>
    );
};

TaskList.propTypes = {
    /* название колонки */
    title: PropTypes.string,
    /* статус колонки */
    status: PropTypes.string,
    /* список задач */
    tasks: PropTypes.array,
    /* добавление задачи с указанием статуса */
    withStatus: PropTypes.func,
}

export default mapCommonStates(TaskList);