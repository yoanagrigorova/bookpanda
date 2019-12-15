import { getSubscribersPending, getSubscribersSuccess, getSubscribersError } from './action';

function getSubscribers(id) {
    return dispatch => {
        dispatch(getSubscribersPending());
        fetch('http://localhost:8080/subscription/countSubscribers?userId='+id)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getSubscribersSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getSubscribersError(error));
            })
    }
}

export default getSubscribers;