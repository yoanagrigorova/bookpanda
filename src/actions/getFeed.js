import { getFeedPending, getFeedSuccess, getFeedError } from './action';

function getFeed(id) {
    return dispatch => {
        dispatch(getFeedPending());
        fetch('http://localhost:8080/subscription/get?id='+id)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getFeedSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getFeedError(error));
            })
    }
}

export default getFeed;