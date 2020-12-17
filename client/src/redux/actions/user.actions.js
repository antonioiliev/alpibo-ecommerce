import axios from "axios";
import { LOGIN_REQUEST, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS } from "../types"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        });

        const { data } = await axios.post('/api/users/login', { email, password }, { headers: 'application/json'});

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
}