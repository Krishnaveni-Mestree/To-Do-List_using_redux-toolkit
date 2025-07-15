import React, { useState } from 'react';

function AddTodo() {
  const [task, setTask] = useState('');

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
      <button className="delete-all">Delete All</button>
    </div>
  );
}

export default AddTodo;
