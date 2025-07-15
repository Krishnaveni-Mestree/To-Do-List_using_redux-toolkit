import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/TodoList/todoSlice';

function TodoList() {
    const todos=useSelector((state)=>state.todos)
    
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState('');
    console.log(todos)
    const dispatch=useDispatch();

    const handleEditClick=(id,currentText)=>{
        setEditId(id);
        setEditText(currentText)
    }

    const handleSaveClick=(id)=>{
        dispatch(updateTodo({id,newText:editText}))
        setEditId(null);
        setEditText('');
    }

  return (
    <div className="container">
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
                            <button onClick={()=>handleSaveClick(todo.id)}>Save</button>
                        </>
                    ) :
                    (
                        <>
                            <span>{todo.text}</span>
                            <button onClick={()=>handleEditClick(todo.id,todo.text)}>Edit</button>
                        </>
                    )
                }
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        ))
      }
    </div>
  );
}

export default TodoList;
