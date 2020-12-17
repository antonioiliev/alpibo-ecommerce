import { LOGIN_REQUEST, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST } from "../types";

export const userLoginReducers = (state = {}, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_REQUEST_SUCCESS:
            return { loading: false, user: action.payload }
        case LOGIN_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        case LOGOUT_REQUEST:
            return {}
        default:
            return state;
    }
}