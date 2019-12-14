// export const action = () => dispatch =>{
//     dispatch({
//         type: 'ACTION',
//         payload: "hello"
//     })
// }

// export const simpleAction = () => dispatch => {
//     dispatch({
//         type: 'SIMPLE_ACTION',
//         payload: "hello bitches"
//     })
// }

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTRATION_PENDING = "REGISTRATION_PENDING";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CREATE_PUBLICATION_PENDING = "CREATE_PUBLICATION_PENDING";
export const CREATE_PUBLICATION_SUCCESS = "CREATE_PUBLICATION_SUCCESS";
export const CREATE_PUBLICATION_ERROR= "CREATE_PUBLICATION_ERROR";
export const GET_ALL_PUBLICATIONS_PENDING = "GET_ALL_PUBLICATIONS_PENDING";
export const GET_ALL_PUBLICATIONS_SUCCESS = "GET_ALL_PUBLICATIONS_SUCCESS";
export const GET_ALL_PUBLICATIONS_ERROR= "GET_ALL_PUBLICATIONS_ERROR";

export const loginPending = () => {
    return {
        type: LOGIN_PENDING
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user: user
    }
}

export const loginError =(error) => {
    return {
        type: LOGIN_ERROR,
        error: error
    }
}

export const registrationPending = () => {
    return {
        type: REGISTRATION_PENDING
    }
}

export const registrationSuccess = (user) => {
    return {
        type: REGISTRATION_SUCCESS,
        user: user
    }
}

export const registrationError =(error) => {
    return {
        type: REGISTRATION_ERROR,
        error: error
    }
}

export const fetchUsersPending = () => {
    return {
        type: FETCH_USERS_PENDING
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}

export const fetchUsersError =(error) => {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

export const createPublicationPending = () => {
    return {
        type: CREATE_PUBLICATION_PENDING
    }
}

export const createPublicationSuccess = (publication) => {
    return {
        type: CREATE_PUBLICATION_SUCCESS,
        publication: publication
    }
}

export const createPublicationError = (error) => {
    return {
        type: CREATE_PUBLICATION_ERROR,
        error: error
    }
}

export const getAllPublicationsPending = () => {
    return {
        type: GET_ALL_PUBLICATIONS_PENDING
    }
}

export const getAllPublicationsSuccess = (publications) => {
    return {
        type: GET_ALL_PUBLICATIONS_SUCCESS,
        publications: publications
    }
}

export const getAllPublicationsError = (error) => {
    return {
        type: GET_ALL_PUBLICATIONS_ERROR,
        error: error
    }
}