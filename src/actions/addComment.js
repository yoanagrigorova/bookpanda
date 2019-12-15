import { addCommentPending, addCommentSuccess, addCommentError } from './action';

function addComment(data) {
    return dispatch => {
        dispatch(addCommentPending());
        fetch('http://localhost:8080/comment/add', {
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
                dispatch(addCommentSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(addCommentError(error));
            })
    }
}

export default addComment;