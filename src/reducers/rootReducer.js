import { combineReducers } from 'redux';
import {usersReducer} from './reducer';
import {publicationReducer} from "./publicationReducer"
import {subscribtionReducer} from './subscribtionReducer'
export default combineReducers({
    usersReducer,
    publicationReducer,
    subscribtionReducer
});