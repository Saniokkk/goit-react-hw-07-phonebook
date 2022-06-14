import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
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