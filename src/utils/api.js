'use strict';

import axios from 'axios';
export const Root = 'http://18.136.4.176:6030/';
export const API = Root + 'api/v1/';
export const instance = axios.create({
    baseURL: API,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export const getOrdersForChefIdByDateRange = 'orders-chef/order-summary';
