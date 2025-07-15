import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos=useSelector((state)=>state.todos)
    console.log(todos)
  return (
    <div className="container">
      {
        todos.map((todo)=>(
            <div className="task-item" key={todo.id}>
                <span>{todo.text}</span>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ))
      }
    </div>
  );
}

export default TodoList;
