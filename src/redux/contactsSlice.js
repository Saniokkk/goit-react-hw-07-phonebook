import { createSlice } from '@reduxjs/toolkit'
import { getContactList, createContact, removeContact } from './opirations';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",   
    reducers: {
        filterContacts: (state, { payload }) => {
            console.log(state)
            return payload;
        }
    }
})

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    extraReducers: {
        [getContactList.fulfilled]: (_, {payload}) => {
            return payload;
        },
        [createContact.fulfilled]: (state, {payload} ) => {
            console.log(state)
            return [...state, payload];
        },
        [removeContact.fulfilled]: (state, { payload }) => {
            console.log(payload)
            const contactList = state.filter(item => {
                return item.id !== payload.id;
            })
            return contactList;
        }
    }
})


// export const { addContacts, removeContacts } = itemsSlice.actions;
export const { filterContacts } = filterSlice.actions;
export const items = itemsSlice.reducer;
export const filter = filterSlice.reducer;



        // addContacts: (state, { payload }) => {
        //     console.log(state)
        //     return [...state, payload]
        // },
        // removeContacts: (state, { payload }) => {
        //     console.log(state)       
        //     const filterContacts = state.filter(({ id }) => {
        //         return id !== payload;
        //     })
        //     return filterContacts;
        // },
