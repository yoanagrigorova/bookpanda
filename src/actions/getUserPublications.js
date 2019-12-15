import { getUserPublicationsPending, getUserPublicationsSuccess, getUserPublicationsError } from './action';

function getUserPublications(userId) {
    return dispatch => {
        dispatch(getUserPublicationsPending());
        fetch('http://localhost:8080/publication/user?userid='+userId)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getUserPublicationsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getUserPublicationsError(error));
            })
    }
}

export default getUserPublications;