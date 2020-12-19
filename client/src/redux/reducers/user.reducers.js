import { LOGIN_REQUEST, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, REGISTER_REQUEST_SUCCESS, REGISTER_REQUEST_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_REQUEST_SUCCESS, USER_DETAILS_REQUEST_FAIL, USER_UPDATE_DETAILS_REQUEST, USER_UPDATE_DETAILS_REQUEST_SUCCESS, USER_UPDATE_DETAILS_REQUEST_FAIL, LOGIN_INFO_UPDATE } from "../types";

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_REQUEST_SUCCESS:
            return { loading: false, user: action.payload }
        case LOGIN_INFO_UPDATE:
            return { loading: false, user: { ...state.user, ...action.payload } }
        case LOGIN_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        case LOGOUT_REQUEST:
            return {}
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
            return { loading: true }
        case REGISTER_REQUEST_SUCCESS:
            return { loading: false, user: action.payload }
        case REGISTER_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_UPDATE_DETAILS_REQUEST:
            return { ...state, updating: true }
        case USER_DETAILS_REQUEST_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_UPDATE_DETAILS_REQUEST_SUCCESS:
            return { updating: false, user: action.payload }
        case USER_DETAILS_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        case USER_UPDATE_DETAILS_REQUEST_FAIL:
            return { ...state, updating: false }
        default:
            return state;
    }
}