import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
    name: 'messages',
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            state.push(action.payload)

        },
        updateMessage: (state, action) => {
            state[action.payload.index] = action.payload.data
        }
    }
});

export const { addMessage, updateMessage } = messageSlice.actions;

export default messageSlice.reducer