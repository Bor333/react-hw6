import { createStore, compose, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import {messagesReducer} from "store/messages/reducer";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
})

export  type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeEnhancers());
