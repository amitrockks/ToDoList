import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
      <div className="App" style={{ padding: '20px' }}>
        <h1>Redux To-Do List</h1>
        {/* Combining smaller components to form the UI */}
        <AddTask />
        <TaskList />
      </div>
  );
}

export default App;