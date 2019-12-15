import { getCommentsPending, getCommentsSuccess, getCommentsError } from './action';

function getComments(id) {
    return dispatch => {
        dispatch(getCommentsPending());
        fetch('http://localhost:8080/comment/publication?id='+id)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getCommentsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getCommentsError(error));
            })
    }
}

export default getComments;