import { combineReducers } from 'redux';
import {customerReducer} from "./slices/customerSlice";
import {taskReducer} from "./slices/taskSlice";

const rootReducer = combineReducers({
    customers: customerReducer,
    tasks: taskReducer
});

export default rootReducer;
