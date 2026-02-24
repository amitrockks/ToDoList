import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title.trim()) {
            dispatch(addTask(title)); // Dispatch carries payload to reducer
            setTitle("");
        }
    };

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task..." />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default AddTask;