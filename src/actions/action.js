export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTRATION_PENDING = "REGISTRATION_PENDING";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CREATE_PUBLICATION_PENDING = "CREATE_PUBLICATION_PENDING";
export const CREATE_PUBLICATION_SUCCESS = "CREATE_PUBLICATION_SUCCESS";
export const CREATE_PUBLICATION_ERROR= "CREATE_PUBLICATION_ERROR";
export const GET_ALL_PUBLICATIONS_PENDING = "GET_ALL_PUBLICATIONS_PENDING";
export const GET_ALL_PUBLICATIONS_SUCCESS = "GET_ALL_PUBLICATIONS_SUCCESS";
export const GET_ALL_PUBLICATIONS_ERROR= "GET_ALL_PUBLICATIONS_ERROR";
export const GET_PUBLICATION_PENDING = "CREATE_PUBLICATION_PENDING";
export const GET_PUBLICATION_SUCCESS = "CREATE_PUBLICATION_SUCCESS";
export const GET_PUBLICATION_ERROR= "CREATE_PUBLICATION_ERROR";
export const GET_USER_PUBLICATIONS_PENDING = "GET_USER_PUBLICATIONS_PENDING";
export const GET_USER_PUBLICATIONS_SUCCESS = "GET_USER_PUBLICATIONS_SUCCESS";
export const GET_USER_PUBLICATIONS_ERROR = "GET_USER_PUBLICATIONS_ERROR";
export const SUBSCRIBE_PENDING = "SUBSCRIBE_PENDING";
export const SUBSCRIBE_SUCCESS = "SUBSCRIBE_SUCCESS";
export const SUBSCRIBE_ERROR = "SUBSCRIBE_ERROR";
export const GET_FEED_PENDING = "GET_FEED_PENDING";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const GET_FEED_ERROR= "GET_FEED_ERROR";

export const GET_SUBSCRIPTIONS_PENDING = "GET_SUBSCRIPTIONS_PENDING";
export const GET_SUBSCRIPTIONS_SUCCESS = "GET_SUBSCRIPTIONS_SUCCESS";
export const GET_SUBSCRIPTIONS_ERROR= "GET_SUBSCRIPTIONS_ERROR";

export const GET_SUBSCRIBERS_PENDING = "GET_SUBSCRIBERS_PENDING";
export const GET_SUBSCRIBERS_SUCCESS = "GET_SUBSCRIBERS_SUCCESS";
export const GET_SUBSCRIBERS_ERROR = "GET_SUBSCRIBERS_ERROR";

export const ADD_COMMENT_PENDING = "ADD_COMMENT_PENDING";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";

export const GET_COMMENTS_PENDING = "GET_COMMENTS_PENDING";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

export const loginPending = () => {
    return {
        type: LOGIN_PENDING
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user: user
    }
}

export const loginError =(error) => {
    return {
        type: LOGIN_ERROR,
        error: error
    }
}

export const registrationPending = () => {
    return {
        type: REGISTRATION_PENDING
    }
}

export const registrationSuccess = (user) => {
    return {
        type: REGISTRATION_SUCCESS,
        user: user
    }
}

export const registrationError =(error) => {
    return {
        type: REGISTRATION_ERROR,
        error: error
    }
}

export const fetchUsersPending = () => {
    return {
        type: FETCH_USERS_PENDING
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}

export const fetchUsersError =(error) => {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

export const createPublicationPending = () => {
    return {
        type: CREATE_PUBLICATION_PENDING
    }
}

export const createPublicationSuccess = (publication) => {
    return {
        type: CREATE_PUBLICATION_SUCCESS,
        publication: publication
    }
}

export const createPublicationError = (error) => {
    return {
        type: CREATE_PUBLICATION_ERROR,
        error: error
    }
}

export const getAllPublicationsPending = () => {
    return {
        type: GET_ALL_PUBLICATIONS_PENDING
    }
}

export const getAllPublicationsSuccess = (publications) => {
    return {
        type: GET_ALL_PUBLICATIONS_SUCCESS,
        publications: publications
    }
}

export const getAllPublicationsError = (error) => {
    return {
        type: GET_ALL_PUBLICATIONS_ERROR,
        error: error
    }
}

export const getPublicationByIdPending = () => {
    return {
        type: GET_PUBLICATION_PENDING
    }
}

export const getPublicationByIdSuccess = (publication) => {
    return {
        type: GET_PUBLICATION_SUCCESS,
        publication: publication
    }
}

export const getPublicationByIdError = (error) => {
    return {
        type: GET_PUBLICATION_ERROR,
        error: error
    }
}

export const getUserPublicationsPending = () => {
    return {
        type: GET_USER_PUBLICATIONS_PENDING
    }
}

export const getUserPublicationsSuccess = (publications) => {
    return {
        type: GET_USER_PUBLICATIONS_SUCCESS,
        publications: publications
    }
}

export const getUserPublicationsError = (error) => {
    return {
        type: GET_USER_PUBLICATIONS_ERROR,
        error: error
    }
}

export const subscribePending = () => {
    return {
        type: SUBSCRIBE_PENDING
    }
}

export const subscribeSuccess = (subscription) => {
    return {
        type: SUBSCRIBE_SUCCESS,
        subscription: subscription
    }
}

export const subscribeError = (error) => {
    return {
        type: SUBSCRIBE_ERROR,
        error: error
    }
}

export const getFeedPending = () => {
    return {
        type: GET_FEED_PENDING
    }
}

export const getFeedSuccess = (feed) => {
    return {
        type: GET_FEED_SUCCESS,
        feed: feed
    }
}

export const getFeedError = (error) => {
    return {
        type: GET_FEED_ERROR,
        error: error
    }
}

export const getSubscriptionsPending = () => {
    return {
        type: GET_SUBSCRIPTIONS_PENDING
    }
}

export const getSubscriptionsSuccess = (subscriptions) => {
    return {
        type: GET_SUBSCRIPTIONS_SUCCESS,
        subscriptions: subscriptions
    }
}

export const getSubscriptionsError = (error) => {
    return {
        type: GET_SUBSCRIPTIONS_ERROR,
        error: error
    }
}

export const getSubscribersPending = () => {
    return {
        type: GET_SUBSCRIBERS_PENDING
    }
}

export const getSubscribersSuccess = (subscribers) => {
    return {
        type: GET_SUBSCRIBERS_SUCCESS,
        subscribers: subscribers
    }
}

export const getSubscribersError = (error) => {
    return {
        type: GET_SUBSCRIBERS_ERROR,
        error: error
    }
}

export const addCommentPending = () => {
    return {
        type: ADD_COMMENT_PENDING
    }
}

export const addCommentSuccess = (comment) => {
    return {
        type: ADD_COMMENT_SUCCESS,
        comment: comment
    }
}

export const addCommentError = (error) => {
    return {
        type: ADD_COMMENT_ERROR,
        error: error
    }
}

export const getCommentsPending = () => {
    return {
        type: GET_COMMENTS_PENDING
    }
}

export const getCommentsSuccess = (comments) => {
    return {
        type: GET_COMMENTS_SUCCESS,
        comments: comments
    }
}

export const getCommentsError = (error) => {
    return {
        type: GET_COMMENTS_ERROR,
        error: error
    }
}