import React from 'react';

function TodoList() {
  return (
    <div className="container">
      <div className="task-item">
        <span>Pack bag</span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoList;
