import { createPublicationPending, createPublicationSuccess, createPublicationError } from './action';

function createPublication(data) {
    return dispatch => {
        dispatch(createPublicationPending());
        fetch('http://localhost:8080/publication/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log(res)
                dispatch(createPublicationSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error)
                dispatch(createPublicationError(error));
            })
    }
}

export default createPublication;