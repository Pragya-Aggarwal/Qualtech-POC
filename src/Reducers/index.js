import { combineReducers } from 'redux'
import { userReducerAction } from "./User/reducer_user";
import { loaderReducerAction } from "./Loader/loaderReducerAction";


const rootReducer = combineReducers({
    userReducerAction,
    loaderReducerAction
})

export default rootReducer