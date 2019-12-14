// export default (state = {}, action) => {
//     switch (action.type) {
//         case 'SIMPLE_ACTION':
//             return {
//                 result: action.payload
//             }
//         case 'ACTION':
//             return {
//                 result: action.payload
//             }
//         default:
//             return state
//     }
// }

import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR,
    REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from '../actions/action';

const initialState = {
    pending: false,
    users: [],
    error: null,
    user: null
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            console.log(action.users)
            return {
                ...state,
                pending: false,
                users: action.users
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
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

export const getUsers = state => {
    console.log(state.users)
    return state.users;
};
export const getCurrentUser = state => initialState.user;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;