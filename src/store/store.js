'use strict';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';

import rootReducer from '../reducers';

// redux middleware header config
const axiosMiddlewareOptions = {
    interceptors: {
        request: [
            (state, config) => {
                return config;
            },
        ],
        response: [
            (state, response) => {
                return response;
            },
        ],
    },
};
// create redux middleware
const clients = {
    default: {
        client: axios.create({
            baseURL: 'http://52.15.184.142:80',
            responseType: 'json',
        }),
        options: axiosMiddlewareOptions,
    },
};

// create redux store
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(ReduxThunk, multiClientMiddleware(clients))
);

export default store;
