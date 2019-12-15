import {
    SUBSCRIBE_PENDING, SUBSCRIBE_SUCCESS, SUBSCRIBE_ERROR,
    GET_FEED_PENDING, GET_FEED_SUCCESS, GET_FEED_ERROR,
    GET_SUBSCRIPTIONS_PENDING, GET_SUBSCRIPTIONS_SUCCESS, GET_SUBSCRIPTIONS_ERROR,
    GET_SUBSCRIBERS_PENDING, GET_SUBSCRIBERS_SUCCESS, GET_SUBSCRIBERS_ERROR
} from '../actions/action';

const initialState = {
    pending: false,
    users: [],
    error: null,
    user: null,
    feed: null,
    subsctiptions: null
}

export function subscribtionReducer(state = initialState, action) {
    switch (action.type) {
        case SUBSCRIBE_PENDING:
            return {
                ...state,
                pending: true
            }
        case SUBSCRIBE_SUCCESS:
            return {
                ...state,
                pending: false,
                subscription: action.subscription
            }
        case SUBSCRIBE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_FEED_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_FEED_SUCCESS:
            return {
                ...state,
                pending: false,
                feed: action.feed
            }
        case GET_FEED_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_SUBSCRIPTIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_SUBSCRIPTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                subscriptions: action.subscriptions
            }
        case GET_SUBSCRIPTIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_SUBSCRIBERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_SUBSCRIBERS_SUCCESS:
            return {
                ...state,
                pending: false,
                subscribers: action.subscribers
            }
        case GET_SUBSCRIBERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default subscribtionReducer