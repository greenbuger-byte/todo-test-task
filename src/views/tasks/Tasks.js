import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import * as queryString from "querystring";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { mapCommonStates } from "../../utils/store";
import STATUSES from "../../utils/statuses";
import { pages } from "../../utils/routes";

import TaskGrid from "../../components/task-grid";
import Header from "../../components/header";
import TaskPanel from "../../components/task-panel";
import TaskList from "../../components/task-list";
import FlashMessage from "../../components/flash-message";
import Modal from "../../components/modal";
import TaskForm from "../../components/task-form/TaskForm";
import ProfileItem from "../../components/profile-item";
import Footer from "../../components/footer";
import NoFounded from "../../components/no-founded";

import {
    TaskContainer,
    TaskWrapper,
    TaskListContainer,
    ErrorContainer,
    TaskUsers,
    TaskGridContainer,
    TasksButtonFilterReset
} from "./Tasks.styles";

const Tasks = (props) => {
    const history = useHistory();
    const { t } = useTranslation();
    const { fetchTask, taskState, authState, addOrRemoveTeam } = props;
    const { tasks, errors, isLoading } = taskState;
    const [viewStyle, setViewStyle] = useState('grid');
    const { profile } = authState;
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState(STATUSES[0].value);
    const [timeFilter, setTimeFilter] = useState(null);
    const [teamFilter, setTeamFilter] = useState(null);

    useEffect(()=>{
        setViewStyle(localStorage.getItem('type') || "grid")
    }, [])

    const resetTeamFilter = () => {
        setTeamFilter(null);
        const search = queryString.parse(history.location.search.substr(1));
        delete search.team;
        history.push({
            pathname: pages.TASKS,
            search: `?${queryString.stringify(search)}`
        })
    }

    useEffect( () => {
        const search = queryString.parse(history.location.search.substr(1));
        !timeFilter && setTimeFilter(search.filter || "all");
        !teamFilter && setTeamFilter(search.team || null);
        if(timeFilter!=="all")
            Array.isArray(timeFilter) ? search.filter = timeFilter[0] : search.filter = timeFilter;
        else delete search.filter;
        if(teamFilter) Array.isArray(teamFilter) ?
            search.team = teamFilter[0] : search.team = teamFilter;
        else delete search.team;
        history.push({
            pathname: pages.TASKS,
            search: `?${queryString.stringify(search)}`
        });
        fetchTask(history.location.search);
    }, [timeFilter, teamFilter, fetchTask, history])

    const showAddModalWithStatus = (status) => {
        setStatus(status);
        setShowModal(true);
    }

    const renderGridList = () => {
        if(Object.values(tasks).length){
            const grid = Object
                .values(tasks)
                .reduce((prev, cur) =>({...prev, tasks: [...prev.tasks, ...cur.tasks]}));
            const sortedTasks = grid.tasks.sort(
                (a, b) =>  Number(new Date(a.end_date).getTime()) < Number(new Date(b.end_date).getTime()));
            if(!sortedTasks.length && !isLoading)  return <NoFounded message={"Задач не найдено"} />;
            return <TaskGrid tasks={sortedTasks} />
        }
    }

    const renderTaskList = STATUSES.map( (status, index) => (
       <TaskList
           key={index}
           title={status.name}
           withStatus={showAddModalWithStatus}
           tasks={tasks[status.value]?.tasks}
           status={status.value}
       />
    ));

    const renderTeam = !!profile.lead.length && <TaskUsers>
            { teamFilter && <TasksButtonFilterReset
                onClick={resetTeamFilter}
                variant="light"
                label={t('task.reset_team')}
            />}
            {profile.lead.map( user =>  <ProfileItem
                key={user._id}
                actionHandler={setTeamFilter}
                currentActive={teamFilter}
                editTeam={addOrRemoveTeam}
                type="team"
                profile={user}
            />)}
    </TaskUsers>;

    return (
        <>
            <Header />
            <TaskContainer>
                <TaskWrapper >

                    {renderTeam}
                    <TaskPanel
                        setTimeFilter={setTimeFilter}
                        currentFilter={timeFilter}
                        currentView={viewStyle}
                        setView={setViewStyle}
                        withStatus={showAddModalWithStatus} />
                        <DndProvider backend={HTML5Backend}>
                            {viewStyle === 'grid' && <TaskGridContainer>
                                {renderGridList()}
                            </TaskGridContainer>
                            }
                            {viewStyle === 'column' && <TaskListContainer>
                                {renderTaskList}
                            </TaskListContainer>}
                        </DndProvider>
                </TaskWrapper>
                {errors && <ErrorContainer>
                    <FlashMessage
                        variant="light"
                        message={errors}
                    />
                </ErrorContainer>}
            </TaskContainer>
            <Modal isModalShow={showModal} title="Добавить задачу" isOpenModalHandler={setShowModal}>
                <TaskForm setClosedTask={setShowModal} status={status}/>
            </Modal>
            <Footer />
        </>

    );
};

Tasks.propTypes = {
    /* запрос к серверу на выгрузку */
    fetchTask: PropTypes.func,
    /* список задач */
    taskState: PropTypes.object,
    /*  обновление списка команды */
    addOrRemoveTeam: PropTypes.func,
}

export default mapCommonStates(Tasks);