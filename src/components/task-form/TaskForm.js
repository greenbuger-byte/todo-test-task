import {useState} from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import FlashMessage from "../flash-message";
import Input from "../input";
import Button from "../button";
import SelectTimePicker from "../input/SelectTimePicker";
import Priority from "../priority/Priority";

import {mapCommonStates} from "../../utils/store";

import {
    CreateTaskPanel,
    CreateTaskRow,
    CreateTaskWrapper,
    StyledForm } from "./TaskForm.styles";
import { PriorityAbout } from "../priority/Priority.styles";

const TaskForm = (props) => {
    const { createTask, setClosedTask, status, taskState } = props;
    const { taskCreateError } = taskState;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedPriority, setSelectedPriority] = useState();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createTask({
            ...data,
            priority: selectedPriority,
            create_date: startDate,
            end_date: endDate,
            status
        }).then(
            createdTask => {
               createdTask?.task && setClosedTask?.(false);
            }
        );
    }

    return (
        <CreateTaskWrapper>
            <StyledForm onSubmit={() => handleSubmit(onSubmit)}>
                <Input
                    type={"text"}
                    name="title"
                    label="Задача"
                    errors={errors.title?.type === 'required' ? t('form.task_title_empty') : errors.title?.message}
                    {...register("title", { required: true })}
                />
                <Input
                    type={"textarea"}
                    name="description"
                    label="Описание задачи"
                    errors={errors.description?.type === 'required'
                        ? t('form.task_description_empty')
                        : errors.description?.message}
                    {...register("description", { required: true })}
                />
                <CreateTaskRow>
                    <SelectTimePicker currentDate={startDate} setDate={setStartDate} label={t('form.task_start')}/>
                    <SelectTimePicker currentDate={endDate} setDate={setEndDate} label={t('form.task_end')} />
                </CreateTaskRow>
                {taskCreateError && <FlashMessage full variant="alert" message={taskCreateError} />  }
                <Button
                    type="submit"
                    variant="primary"
                    label={t('form.task_add')}
                    full
                    onClick={handleSubmit(onSubmit)}
                />
            </StyledForm>
            <CreateTaskPanel>
                <Priority type="edit" setSelected={setSelectedPriority}/>
                <PriorityAbout>
                    {t('priority.attenshion')}
                </PriorityAbout>
            </CreateTaskPanel>
        </CreateTaskWrapper>

    );
};

TaskForm.propTypes = {
    /* данные для редактирования  */
    defaultValue: PropTypes.array,
    /* закрытие окна */
    setClosedTask: PropTypes.func,
    /*  статус задачи */
    status: PropTypes.string,
    /* сообщение об ошибках */
    taskState: PropTypes.string,
}

TaskForm.defaultProps = {
    status: 'implementation',
}
export default mapCommonStates(TaskForm);