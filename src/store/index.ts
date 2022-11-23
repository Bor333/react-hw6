import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer } from './profile/reducer';
import {messagesReducer} from "store/messages/reducer";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
}

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export  type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)