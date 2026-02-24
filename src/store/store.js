import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

// Single source of truth for the application
export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
});