import {CREATE_PUBLICATION_PENDING, CREATE_PUBLICATION_SUCCESS, CREATE_PUBLICATION_ERROR,
    GET_ALL_PUBLICATIONS_PENDING, GET_ALL_PUBLICATIONS_SUCCESS, GET_ALL_PUBLICATIONS_ERROR} from '../actions/action';

const initialState = {
    pending: false,
    publication: null,
    error: null
}

export function publicationReducer(state = initialState, action) {
    switch(action.type) {
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
        default: 
            return state;
    }
}