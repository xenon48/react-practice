import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from './profileReducer';
import thunkMiddleware from "redux-thunk";
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './usersReducer';
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;