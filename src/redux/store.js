import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
};

const reducers = combineReducers({ contacts: contactsSlice });
const persistedReducer = persistReducer(persistConfig, reducers);
console.log(persistConfig)
console.log(persistedReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
