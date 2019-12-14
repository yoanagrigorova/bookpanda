import { combineReducers } from 'redux';
import {usersReducer} from './reducer';
import {publicationReducer} from "./publicationReducer"
export default combineReducers({
    usersReducer,
    publicationReducer
});