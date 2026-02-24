import { createSlice } from '@reduxjs/toolkit';

// Defining the feature-based state logic
const taskSlice = createSlice({
    name: 'tasks',
    initialState: [], // Schema: { title: string, status: "Pending" | "Done" }
    reducers: {
        // Reducers define how the state changes in response to actions
        addTask: (state, action) => {
            // Logic for creating new data
            state.push({
                id: Date.now(),
                title: action.payload,
                status: "Pending"
            });
        },
        deleteTask: (state, action) => {
            // Permanently removes a resource
            return state.filter(task => task.id !== action.payload);
        },
        changeStatus: (state, action) => {
            // Replaces or updates existing data
            const task = state.find(t => t.id === action.payload);
            if (task) {
                task.status = task.status === "Pending" ? "Done" : "Pending";
            }
        }
    }
});

// RTK automatically generates action creators
export const { addTask, deleteTask, changeStatus } = taskSlice.actions;
export default taskSlice.reducer;