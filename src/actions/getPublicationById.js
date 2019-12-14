import { getPublicationByIdPending, getPublicationByIdSuccess, getPublicationByIdError } from './action';

function getPublicationById(id) {
    return dispatch => {
        dispatch(getPublicationByIdPending());
        fetch('http://localhost:8080/publication?id='+id)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log(res)
                dispatch(getPublicationByIdSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error)
                dispatch(getPublicationByIdError(error));
            })
    }
}

export default getPublicationById;