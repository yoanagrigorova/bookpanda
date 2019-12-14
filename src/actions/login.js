import { loginPending, loginSuccess, loginError } from './action';

function login(data) {
    return dispatch => {
        dispatch(loginPending());
        fetch('http://localhost:8080/user/login', {
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
                dispatch(loginSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error)
                dispatch(loginError(error));
            })
    }
}

export default login;