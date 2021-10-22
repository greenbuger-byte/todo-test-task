import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import { httpRequest } from "./middlewares/restMiddleware";
import { methods, requests } from "../utils/routes";


const slice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoggingIn: false,
        authError: null,
        profileError: null,
        isAuth: false,
        profile: null,
        profiles: [],
        accessToken: localStorage.getItem('accessToken'),
    },
    reducers: {
        setProfile: (state, { payload }) => {
            state.profile = payload;
        },
        updateToken: (state, {payload}) => {
              localStorage.setItem("accessToken", payload.token);
              state.profile = jwtDecode(payload.token);
              state.accessToken = payload.token;
        },
        loginResponse: (state, { payload }) => {
            state.authError = null;
            state.accessToken = payload.token;
            state.profile = jwtDecode(payload.token);
            state.isAuth = true;
            localStorage.setItem("accessToken", payload.token);
        },
        loginError: (state, { payload }) => {
            state.authError = payload;
        },
        profileError: (state, { payload }) => {
            state.profileError = payload;
        },
        logout: (state) => {
            state.authError = null;
            state.accessToken = null;
            state.profile = null;
            state.isAuth = false;
            localStorage.removeItem('accessToken')
        },
        fetchProfilesResponse: (state, {payload}) => {
            state.profiles = payload.profiles;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoggingIn = payload;
        },
        addOrRemoveTeamResponse: (state, { payload }) => {
            state.profile = payload.profile;
        },
    }
});

export const {
    loginResponse,
    logout,
    loginError,
    toggleLoading,
    setProfile,
    fetchProfilesResponse,
    addOrRemoveTeamResponse,
    profileError,
    updateToken,
} = slice.actions;

export default slice.reducer;

export const login = (data) => {
    return httpRequest({
        url: requests.LOGIN,
        method: methods.POST,
        data,
        onLoading: toggleLoading.type,
        onSuccess: loginResponse.type,
        onError: loginError.type,
    });
};

export const registration = (data) => {
    return httpRequest({
        url: requests.REGISTER,
        method: methods.POST,
        data,
        onLoading: toggleLoading.type,
        onSuccess: loginResponse.type,
        onError: loginError.type
    });
};

export const fetchProfiles = (data) => {
    return httpRequest({
        url: requests.USERS,
        method: methods.GET,
        data,
        onLoading: toggleLoading.type,
        onSuccess: fetchProfilesResponse.type,
        onError: loginError.type
    });
}

export const addOrRemoveTeam = (id) => {
    return httpRequest({
        url: `${requests.TEAM}/${id}`,
        methods: methods.GET,
        onLoading: toggleLoading.type,
        onSuccess: addOrRemoveTeamResponse.type,
        onError: profileError.type,
    })
}

export const loadProfile = () => {
    return httpRequest({
        url: `${requests.ME}`,
        methods: methods.GET,
        onLading: toggleLoading.type,
        onSuccess: updateToken.type,
        onError: profileError.type,
    })
}