import { configureStore } from '@reduxjs/toolkit';
import entryReducer from '../components/entrySlice';

export default configureStore({
    reducer: {
        entries: entryReducer
    }
});