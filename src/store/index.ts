import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { profileReducer } from './profile/slice';
import {messagesReducer} from "store/messages/slice";
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile'],
}

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type StoreState = ReturnType<typeof rootReducer>;

// export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER]
            }
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)