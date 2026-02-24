import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, changeStatus } from '../store/taskSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks); // Extracts specific state data
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
          <span style={{ textDecoration: task.status === "Done" ? "line-through" : "none" }}>
            {task.title} ({task.status})
          </span>
                    <button onClick={() => dispatch(changeStatus(task.id))}>Toggle Status</button>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;