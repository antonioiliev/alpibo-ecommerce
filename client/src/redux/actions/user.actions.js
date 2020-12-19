import axios from "axios";
import { LOGIN_REQUEST, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, REGISTER_REQUEST_FAIL, REGISTER_REQUEST_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_REQUEST_FAIL, USER_DETAILS_REQUEST_SUCCESS, USER_UPDATE_DETAILS_REQUEST, USER_UPDATE_DETAILS_REQUEST_SUCCESS, USER_UPDATE_DETAILS_REQUEST_FAIL, LOGIN_INFO_UPDATE } from "../types"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        });

        const { data } = await axios.post('/api/users/login', { email, password }, { 
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: LOGIN_REQUEST_SUCCESS,
            payload: data
        });

        window.localStorage.setItem('alpibo_user', JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: LOGIN_REQUEST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    window.localStorage.removeItem('alpibo_user');
};

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST
        });

        const { data } = await axios.post('/api/users/register', { name, email, password }, { 
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: REGISTER_REQUEST_SUCCESS,
            payload: data
        });

        dispatch({
            type: LOGIN_REQUEST_SUCCESS,
            payload: data
        });

        window.localStorage.setItem('alpibo_user', JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: REGISTER_REQUEST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        });

        const { userLogin: { user } } = getState();

        const { data } = await axios.get(`/api/users/profile`, { 
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        });

        dispatch({
            type: USER_DETAILS_REQUEST_SUCCESS,
            payload: data
        });

    } catch (e) {
        dispatch({
            type: USER_DETAILS_REQUEST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};

export const updateUserProfile = (userParam) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_DETAILS_REQUEST
        });

        const { userLogin: { user } } = getState();

        const { data } = await axios.put(`/api/users/profile`, userParam, { 
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        });

        dispatch({
            type: USER_UPDATE_DETAILS_REQUEST_SUCCESS,
            payload: data
        });

        dispatch({
            type: LOGIN_INFO_UPDATE,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: USER_UPDATE_DETAILS_REQUEST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
};