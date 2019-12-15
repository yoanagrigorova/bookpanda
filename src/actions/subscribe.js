import { subscribePending, subscribeSuccess, subscribeError } from './action';

function subscribe(data) {
    return dispatch => {
        dispatch(subscribePending());
        fetch('http://localhost:8080/subscription/add', {
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
                dispatch(subscribeSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(subscribeError(error));
            })
    }
}

export default subscribe;