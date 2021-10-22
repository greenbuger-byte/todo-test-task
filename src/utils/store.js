import { connect } from "react-redux";

import {
    fetchTasks,
    createTask,
    selectTask,
    updateStatusTask,
    taskCreateErrorResponse,
    patchTask } from "../store/tastSlice";
import {
    login,
    registration,
    fetchProfiles,
    logout,
    addOrRemoveTeam,
} from "../store/authSlice";

export const mapCommonStates = (TargetComponent) => {

    const mapGlobalStateToProps = (state) => ({
        taskState: state.taskSlice,
        authState: state.authSlice,
    });

    const mapGlobalDispatchToProps = (dispatch) => ({
        fetchTask: (payload) => dispatch(fetchTasks(payload)),
        login: (payload) => dispatch(login(payload)),
        registration: (payload) => dispatch(registration(payload)),
        logout: (payload) => dispatch(logout(payload)),
        fetchProfiles: (payload) => dispatch(fetchProfiles(payload)),
        addOrRemoveTeam: (payload) => dispatch(addOrRemoveTeam(payload)),
        createTask: (payload) => dispatch(createTask(payload)),
        selectTask: (payload) => dispatch(selectTask(payload)),
        patchTask: (id, payload) => dispatch(patchTask(id, payload)),
        updateStatusTask: (payload) => dispatch(updateStatusTask(payload)),
        taskCreateErrorResponse: (payload) => dispatch(taskCreateErrorResponse(payload)),
    });

    return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(TargetComponent);
}
