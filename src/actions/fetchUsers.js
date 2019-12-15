import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './action';

function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch('http://localhost:8080/user/all')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    }
}

export default fetchUsers;