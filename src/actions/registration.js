import { registrationPending, registrationSuccess, registrationError } from './action';

function registration(data) {
    return dispatch => {
        dispatch(registrationPending());
        fetch('http://localhost:8080/user/registration', {
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
                dispatch(registrationSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(registrationError(error));
            })
    }
}

export default registration;