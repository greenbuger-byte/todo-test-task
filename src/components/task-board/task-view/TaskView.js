import {createRef, useRef, useState} from "react";
import ReactTooltip from 'react-tooltip';
import PropTypes from "prop-types";
import { BiArrowFromLeft, BiPencil, BiTime, BiUser } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import { mapCommonStates } from "../../../utils/store";

import FlashMessage from "../../flash-message";
import Icon from "../../icon";
import Priority from "../../priority/Priority";

import { white } from "../../../theme/colors";

import useWhiteSpaces from "../../../hooks/useWhiteSpaces";
import { useClickOutside } from "../../../hooks/useClickOutside";
import useHumanTime from "../../../hooks/useHumanTime";

import {
    ChangePriority,
    DescriptionEdit,
    StyledAvatar,
    StyledButton,
    StyledDescriptionInput,
    StyledIcon,
    StyledPriorityWrapper,
    StyledSelectTimePicker,
    StyledTitleInput,
    TaskEditView,
    TaskEmptyList,
    TaskFindUser,
    TaskInfoAvatar,
    TaskProfileItem,
    TaskProfileList,
    TaskTimeEdit,
    TaskTimeEditButtons,
    TaskViewBar,
    TaskViewContainer,
    TaskViewDescription,
    TaskViewDescriptionTitle,
    TaskViewInfo,
    TaskViewPopup,
    TaskViewResponsible,
    TaskViewResponsibleList,
    TaskViewResponsibleProfile,
    TaskViewResponsibleTitle,
    TaskViewTitle,
    TaskViewWrapper
} from "./TaskView.styles";

const TaskView = (props) => {
    const {
        fetchProfiles,
        patchTask,
        authState,
        task,
        taskCreateErrorResponse,
        taskCreateError,
        updateStatusTask,
    } = props;
    const { profile } = authState;
    const { t } = useTranslation();
    const whiteSpace = useWhiteSpaces();
    const EDIT_TYPE = {
        title: "title",
        description: "description",
        priority: 'priority',
        date: 'date',
    }

    const [currentTask, setCurrentTask] = useState(task);
    const [dateEdit, setDateEdit] = useState(false);
    const [newDate, setDate] = useState({
            create_date: currentTask.create_date,
            end_date: currentTask.end_date
        });
    const [priorityBoxOpen, setPriorityBoxOpen] = useState(false);
    const [titleEdit, setTitleEdit] = useState(false);
    const [descriptionEdit, setDescriptionEdit] = useState(false);
    const [responsiblePopup, showResponsiblePopup] = useState(false);
    const [isDisabledButton, setDisabledButton] = useState(false);

    const toggleProfileRef = useRef();
    const toggleDescriptionRef = useRef();
    const toggleTitleEditRef = useRef();

    const descriptionRef = createRef();
    const titleRef = createRef();
    const togglePriorityRef = createRef();

    const author = currentTask.author?.name || currentTask.author?.login || null;
    const humanTime = useHumanTime();

    const youCanEdit = !!task.responsible.find( user => {
        return profile.lead.find( userByLead => {
            return user._id === userByLead._id
        } )
    } ) || task.author._id === profile.id;

    const canEditCheck = (edit) => {
        youCanEdit && edit(true);
    }

    useClickOutside(() => showResponsiblePopup(false), toggleProfileRef);
    useClickOutside((ev) => patchHandler(EDIT_TYPE.description), toggleDescriptionRef);
    useClickOutside(() => patchHandler(EDIT_TYPE.title), toggleTitleEditRef);
    useClickOutside(() => patchHandler(EDIT_TYPE.priority), togglePriorityRef);

    const patchHandler = (type) => {
        currentTask[type] !== task[type]
        && togglePatchHandler(EDIT_TYPE[type], currentTask[type]);
        switch (type){
            case EDIT_TYPE.priority:
                setPriorityBoxOpen(false);
                break;
            case EDIT_TYPE.description:
                setDescriptionEdit(false);
                break;
            case EDIT_TYPE.title:
                setTitleEdit(false);
                break;
            default:
                return;
        }
    }

    const searchProfiles = () => {
        setDisabledButton(true);
        fetchProfiles().then( res => {
            showResponsiblePopup(true);
        }).finally(() => setDisabledButton(false));
    };

    const changeHandler = (type, value) =>{
        if(descriptionEdit){
            descriptionRef.current.style.height = 'auto';
            const count = value.target.value.split('\n');
            descriptionRef.current.style.height= (count.length *1)+'rem';
        }
        setCurrentTask(
            {...currentTask, [type]: value?.target?.value || value}
        );
    }

    const togglePatchHandler = (type, value) =>{
       type === 'status' && updateStatusTask({newStatus: value , task: currentTask});
        patchTask(task._id, { type, value })
            .then( response =>setCurrentTask(response.task));
    }

    const saveDateHandler = () =>{
        if(new Date(newDate.create_date).getTime() > new Date(newDate.end_date).getTime()){
            newDate.create_date !== currentTask.create_date
            && togglePatchHandler('create_date', newDate.create_date);
            newDate.end_date !== currentTask.end_date
            &&togglePatchHandler('end_date', newDate.end_date);
            setDateEdit(false);
        }else taskCreateErrorResponse(t('task.create_more_end'));
    }

    const renderResponsible = () => (
        currentTask?.responsible.map( respUser => (
            <TaskViewResponsibleProfile key={respUser._id} data-tip={respUser.name || respUser.login}>
               <StyledAvatar name={respUser.name || respUser.login} size={32} round />
            </TaskViewResponsibleProfile>
        ))
    );

    const descriptionEditBlock =  descriptionEdit
        ? <DescriptionEdit ref={toggleDescriptionRef}>
            <StyledDescriptionInput
                ref={descriptionRef}
                name="description"
                type="textarea"
                value={currentTask.description}
                inputHandler={(ev) =>changeHandler("description", ev)}
            />
        </DescriptionEdit>
        :<TaskViewDescription onClick={() => canEditCheck(setDescriptionEdit)}>{whiteSpace(currentTask.description)}
        </TaskViewDescription>

    const titleEditBlock = titleEdit ?  <StyledTitleInput
            ref={titleRef}
            padding="0"
            type="text"
            value={currentTask.title}
            inputHandler={(ev) =>changeHandler("title", ev)}
        />
        :<>
            {currentTask.title}
            <TaskEditView onClick={() => canEditCheck(setTitleEdit)}>
                { youCanEdit &&  <BiPencil />}
            </TaskEditView>
        </>;

    return (
        <TaskViewWrapper>
            <TaskViewContainer>
                <TaskViewTitle ref={toggleTitleEditRef}>
                   <StyledIcon name="Board" color={white}  size={12} />
                    <StyledPriorityWrapper  onClick={() => canEditCheck(setPriorityBoxOpen)}>
                        <Priority currentPriority={currentTask.priority} />
                    </StyledPriorityWrapper>
                    { priorityBoxOpen && <ChangePriority ref={togglePriorityRef}>
                       <Priority
                           type="edit"
                           setSelected={(priority) =>changeHandler(EDIT_TYPE.priority, priority)}
                           forDefault={currentTask.priority}
                       />
                    </ChangePriority> }
                    {titleEditBlock}
                </TaskViewTitle>
                <TaskViewInfo>
                    {t('task.author')}: <TaskInfoAvatar name={author} size={12} round /> {author}
                </TaskViewInfo>
                <TaskViewInfo>
                <TaskViewInfo onClick={()=>canEditCheck(setDateEdit)}>
                    {t('task.times')}:
                    <BiTime />{humanTime(task.create_date)} - <BiTime />{humanTime(task.end_date)}
                </TaskViewInfo>
                    {dateEdit && <TaskTimeEdit  >
                        <StyledSelectTimePicker
                            setDate={(res) => setDate({...newDate, create_date: res})}
                            currentDate={currentTask.create_date}
                            label={t('task.create_date')}
                        />
                        <StyledSelectTimePicker
                            setDate={(res) => setDate({...newDate, end_date: res})}
                            currentDate={currentTask.end_date}
                            label={t('task.end_date')}/>
                        <TaskTimeEditButtons>
                            <StyledButton
                                onClick={saveDateHandler}
                                variant="light"
                            >
                                {t('buttons.update')}
                            </StyledButton>
                            <StyledButton
                                onClick={() => setDateEdit(false)}
                                variant="light"
                            >
                                {t('buttons.cancel')}
                            </StyledButton>
                        </TaskTimeEditButtons>

                    </TaskTimeEdit>}
                 </TaskViewInfo>
                <TaskViewDescriptionTitle>
                    <Icon name="AlignRight" color={white} size={12}/> {t('task.description')}
                </TaskViewDescriptionTitle>
                {taskCreateError && <FlashMessage variant="alert" message={taskCreateError} /> }
                {descriptionEditBlock}
            </TaskViewContainer>
            <TaskViewBar>
                { !youCanEdit && <FlashMessage message={t('task.task_team_alive')} /> }
                <TaskViewResponsible>
                    <TaskViewResponsibleTitle>{t('task.executor')}: </TaskViewResponsibleTitle>
                  <TaskViewResponsibleList>{renderResponsible()}</TaskViewResponsibleList>
                </TaskViewResponsible>
                <StyledButton
                    disable={!isDisabledButton}
                    variant="light"
                    onClick={() => togglePatchHandler("responsible", profile.id)}
                    full>
                   <BiArrowFromLeft/>
                    {t('buttons.execute')}
                </StyledButton>
                <TaskViewPopup>
                    <StyledButton
                        disable={!isDisabledButton}
                        onClick={searchProfiles}
                        variant="light"
                        full
                    >
                        {!isDisabledButton
                            ? <><BiUser /> {t('buttons.appoint')} </>
                            : <>{t('buttons.search')} ...</> }
                    </StyledButton>
                    {responsiblePopup &&  <TaskFindUser ref={toggleProfileRef}>
                        {(profile.lead.length && profile.lead?.map( currentProfile => <TaskProfileList key={currentProfile._id}>
                            <TaskProfileItem
                                onClick={() => togglePatchHandler("responsible", currentProfile._id)}
                            >
                                <StyledAvatar
                                    name={currentProfile.name || currentProfile.login}
                                    size={15}
                                    round
                                />
                                {currentProfile.login}
                            </TaskProfileItem>
                        </TaskProfileList>)) || <TaskEmptyList message={t('task.empty_team')} />}
                    </TaskFindUser> }
                </TaskViewPopup>
            </TaskViewBar>
            <ReactTooltip />
        </TaskViewWrapper>
    );
};

TaskView.propTypes = {
    /* задача */
    task: PropTypes.object,
    /* выгрузка профилей */
    fetchProfiles: PropTypes.func,
    /* список профилей */
    authState: PropTypes.object,
    /* патч иззменений */
    patchTask: PropTypes.func,
    /* добавление ошибок в стор */
    taskCreateErrorResponse: PropTypes.func,
    /* экшен обновления статуса */
    updateStatusTask: PropTypes.func,
}

export default mapCommonStates(TaskView);