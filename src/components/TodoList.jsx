import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos=useSelector((state)=>state.todos)
    console.log(todos)
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState('');

    const handleEditClick=(id,currentText)=>{
        setEditId(id);
        setEditText(currentText)
    }

  return (
    <div className="container">
        {editId}{editText}
      {
        todos.map((todo)=>(
            <div className="task-item" key={todo.id}>
                {
                    editId===todo.id ?
                    (
                        <>
                            <input
                                type='text'
                                value={editText}
                                onChange={(e)=>setEditText(e.target.value)}
                            />
                            <button>Save</button>
                        </>
                    ) :
                    (
                        <>
                            <span>{todo.text}</span>
                            <button onClick={()=>handleEditClick(todo.id,todo.text)}>Edit</button>
                        </>
                    )
                }
                <button>Delete</button>
            </div>
        ))
      }
    </div>
  );
}

export default TodoList;
