import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './contactsSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
// };

const reducers = combineReducers({ items, filter} );
// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: {
        contacts:  reducers
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    // }),
});

// export const persistor = persistStore(store);
