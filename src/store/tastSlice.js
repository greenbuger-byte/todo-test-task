import { createSlice } from "@reduxjs/toolkit";
import {httpRequest} from "./middlewares/restMiddleware";
import {methods, requests} from "../utils/routes";

const slice = createSlice({
    name: 'taskSlice',
    initialState: {
        perPage: 10,
        tasks: {},
        task: null,
        isLoading: false,
        isPatchLoading: false,
        errors: null,
        taskCreateError: null,
    },
    reducers:{
        errorResponse: (state, payload) => {
            state.errors = payload.payload;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        patchLoading: (state, {payload}) => {
            state.isPatchLoading = payload;
        },
        fetchTaskResponse: (state, {payload}) => {
            const { tasks } = payload;
            state.errors = null;
            state.tasks = tasks;
        },
        createTaskResponse: (state, {payload}) => {
            const { task } = payload;
            state.tasks = {...state.tasks,
                [task.status]: {...state.tasks[task.status],
                    pages: Math.ceil(state.count++ / state.perPage ),
                    tasks: [task, ...state.tasks[task.status].tasks]}};
        },
        patchTaskResponse: (state, { payload }) => {
            const { task } = payload;
            state.tasks[task.status].tasks = state.tasks[task.status].tasks
                .map(task => task._id === payload.task._id ? task = payload.task : task);
        },
        selectTask: (state, {payload}) => {
            state.task = payload;
        },
        updateStatusTask: (state, {payload}) => {
            const {newStatus , task} = payload;
            state.tasks[task.status].tasks = state.tasks[task.status].tasks.filter(findTask => findTask._id !== task._id && findTask);
            state.tasks[newStatus].tasks = [task, ...state.tasks[newStatus].tasks];
        },
        taskCreateErrorResponse: (state, { payload }) => {
            state.taskCreateError = payload;
        }
    }
});

export const {
    fetchTaskResponse,
    toggleLoading,
    createTaskResponse,
    selectTask,
    patchTaskResponse,
    errorResponse,
    patchLoading,
    updateStatusTask,
    taskCreateErrorResponse,
} = slice.actions;

export const fetchTasks = (search) => {
    return httpRequest({
        url: `${requests.TASKS}${search}`,
        method: methods.GET,
        onLoading: toggleLoading.type,
        onSuccess: fetchTaskResponse.type,
        onError: errorResponse.type,
    });
};

export const createTask = (data) => {
    return httpRequest({
        url: requests.TASK_CREATE,
        method: methods.POST,
        data,
        onLoading: toggleLoading.type,
        onSuccess: createTaskResponse.type,
        onError: taskCreateErrorResponse.type,
    })
};

export const patchTask = (id, data) => {
    return httpRequest({
        url: `${requests.TASK_UPDATE}/${id}`,
        method: methods.PATCH,
        data,
        onLoading: patchLoading.type,
        onSuccess: patchTaskResponse.type,
        onError: errorResponse.type,
    })
}

export default slice.reducer;