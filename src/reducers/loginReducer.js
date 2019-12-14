
import {LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/action';

const initialState = {
    pending: false,
    user: null,
    error: null
}

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_PENDING: 
            return {
                ...state,
                pending: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.user
            }
        case LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}