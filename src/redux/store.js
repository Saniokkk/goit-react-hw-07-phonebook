import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';

console.log(contactsSlice);

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
    },
})