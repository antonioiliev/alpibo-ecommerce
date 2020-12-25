import axios from 'axios';
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from '../types';

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        });

        const { userLogin: { user } } = getState();

        const headersObject = { 'Content-Type': 'application/json' };

        if (user.token) {
            headersObject.Authorization = `Bearer ${user.token}`;
        }

        const { data } = await axios.post(`/api/orders`, order, { 
            headers: headersObject
        });

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        });

    } catch (e) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        });

        const { userLogin: { user } } = getState();

        const { data } = await axios.get(`/api/orders/${id}`, { 
            headers: { Authorization: `Bearer ${user.token}`}
        });

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        });

    } catch (e) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};