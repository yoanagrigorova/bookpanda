import {
    CREATE_PUBLICATION_PENDING, CREATE_PUBLICATION_SUCCESS, CREATE_PUBLICATION_ERROR,
    GET_ALL_PUBLICATIONS_PENDING, GET_ALL_PUBLICATIONS_SUCCESS, GET_ALL_PUBLICATIONS_ERROR,
    GET_PUBLICATION_PENDING, GET_PUBLICATION_SUCCESS, GET_PUBLICATION_ERROR,
    GET_USER_PUBLICATIONS_PENDING, GET_USER_PUBLICATIONS_SUCCESS, GET_USER_PUBLICATIONS_ERROR,
    ADD_COMMENT_PENDING, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR,
    GET_COMMENTS_PENDING, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR
} from '../actions/action';

const initialState = {
    pending: false,
    publication: null,
    error: null,
    comment: null,
    comments: []
}

export function publicationReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PUBLICATION_PENDING:
            return {
                ...state,
                pending: true
            }
        case CREATE_PUBLICATION_SUCCESS:
            return {
                ...state,
                pending: false,
                publication: action.publication
            }
        case CREATE_PUBLICATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_ALL_PUBLICATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_ALL_PUBLICATIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                publications: action.publications
            }
        case GET_ALL_PUBLICATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_PUBLICATION_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_PUBLICATION_SUCCESS:
            return {
                ...state,
                pending: false,
                publication: action.publication
            }
        case GET_PUBLICATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_USER_PUBLICATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_USER_PUBLICATIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                publications: action.publications
            }
        case GET_USER_PUBLICATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ADD_COMMENT_PENDING:
            return {
                ...state,
                pending: true
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                pending: false,
                comment: action.comment
            }
        case ADD_COMMENT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case GET_COMMENTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                comments: action.comments
            }
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}