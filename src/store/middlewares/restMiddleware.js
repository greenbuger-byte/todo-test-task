import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { pages } from "../../utils/routes";


export const httpRequest = createAction('http/request');
export const httpRequestSuccess = createAction('http/requestSuccess');
export const httpRequestError = createAction('http/requestError');

const BASE_URL = process.env.REACT_APP_SERVER;
const SERVER_ERROR_MESSAGE = "Ошибка запроса к серверу";

const http = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

http.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, (error) =>Promise.reject(error));

const responseInterceptor = http.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401 ){
            http.interceptors.response.eject(responseInterceptor);
            window.location.pathname = pages.LOGIN;
        }
        return Promise.reject(error.response);
    }
);

const restMiddleware = ({dispatch}) => (next) => async (action) => {
    const { type, payload } = action;
    switch (type) {
        case httpRequest.type: {
            const { url, method, data, onSuccess, onLoading, onError } = payload;
            if(onLoading) dispatch({type: onLoading, payload: true});
            return http.request({url, method, data})
                .then((response) => {
                    const {data} = response;
                    dispatch(httpRequestSuccess({ onLoading, onSuccess, data }));
                    return data;
                }).catch((httpError) => {
                    const error = httpError?.data.message || SERVER_ERROR_MESSAGE;
                    dispatch(httpRequestError({ onLoading, onError, data: error }));

                })
        }
        case httpRequestSuccess.type: {
            const { onLoading, onSuccess, data } = payload;
            if(onSuccess) dispatch({ type: onSuccess, payload: data });
            if(onLoading) dispatch({ type: onLoading, payload: false });
            break;
        }
        case httpRequestError.type: {
            const { onLoading, onError, data } = payload;
            dispatch({ type: onError, payload: data });
            if(onLoading) dispatch({ type: onLoading, payload: false });
            break;
        }
        default:
            return next(action);
    }
}

export default restMiddleware;