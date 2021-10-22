import { configureStore } from "@reduxjs/toolkit";

import restMiddleware from "./middlewares/restMiddleware";

import taskSlice from './tastSlice';
import authSlice from './authSlice';

const reducer = {
    taskSlice, authSlice
}
const middleware = [ restMiddleware ];

export default function createStore () {
    return configureStore( { reducer, middleware });
}