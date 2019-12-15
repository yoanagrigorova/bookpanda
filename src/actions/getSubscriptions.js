import { getSubscriptionsPending, getSubscriptionsSuccess, getSubscriptionsError } from './action';

function getSubscriptions(id) {
    return dispatch => {
        dispatch(getSubscriptionsPending());
        fetch('http://localhost:8080/subscription/countSubscribedTo?userId='+id)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getSubscriptionsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getSubscriptionsError(error));
            })
    }
}

export default getSubscriptions;