import { createSlice } from '@reduxjs/toolkit';

export const entrySlice = createSlice({
    name: 'entry',
    initialState: {
        entries: []
    },
    reducers: {
        add: (state, action) => {
            state.entries.push(action.payload);
        }
    }
});

export const { add } = entrySlice.actions;

export default entrySlice.reducer;