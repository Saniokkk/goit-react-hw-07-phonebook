import { createSlice } from '@reduxjs/toolkit'
import { getFromStorage } from 'components/storage';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: getFromStorage('contacts') ? getFromStorage('contacts') : [],
        filter: "",
    },
    reducers: {
        addContacts: (state, {payload}) => {
            return {...state, items: [...state.items, payload]}
        },
        removeContacts: (state, {payload}) => {
            const contactList = Object.values(state.items);
            const filterContacts = contactList.filter(({ id }) => {
                return id !== payload;
            })
            return { ...state, items: filterContacts };
        },
        filterContacts: (state, {payload}) => {
            return { ...state, filter: payload }
        }
    }
})

export const { addContacts, removeContacts, filterContacts } = contactsSlice.actions

export default contactsSlice.reducer;