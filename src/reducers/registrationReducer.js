
import {REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_ERROR} from '../actions/action';

const initialState = {
    pending: false,
    user: null,
    error: null
}

export function registrationReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTRATION_PENDING: 
            return {
                ...state,
                pending: true
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.user
            }
        case REGISTRATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}