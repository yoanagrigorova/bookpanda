import { getAllPublicationsPending, getAllPublicationsSuccess, getAllPublicationsError } from './action';

function getAllPublications() {
    return dispatch => {
        dispatch(getAllPublicationsPending());
        fetch('http://localhost:8080/publication/all')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getAllPublicationsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getAllPublicationsError(error));
            })
    }
}

export default getAllPublications;