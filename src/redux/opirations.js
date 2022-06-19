import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from '../services/API.js';

export const getContactList = createAsyncThunk(
    'contacts/getContactList',
    async (id, thunkAPI) => {
        console.log(thunkAPI)
        try {
            const  data  = await getContacts();
            return data;
        } catch(error) {
            
        }
    }
)

export const createContact = createAsyncThunk(
    'contacts/createContact',
    async (obj, thunkAPI) => {
        console.log(obj)
        try {
            const data = await addContact(obj);
            console.log(data)
            return data;
        } catch(error) {
            
        }
    }
)

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, thunkAPI) => {
            try {
            const data = await deleteContact(id);
            return data;
        } catch(error) {
            
        }
    }
)

 