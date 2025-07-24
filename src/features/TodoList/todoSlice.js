import { createSlice } from "@reduxjs/toolkit";
import AddTodo from "../../components/AddTodo";


const todosSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload})
        },
        updateTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const todo=state.find((todo)=>todo.id===id)
            if(todo){
                todo.text=newText
            }
        },
        deleteTodo:(state,action)=>{},
        deleteAllTodo:()=>{}
    }
})

export default todosSlice.reducer;
export const {addTodo,updateTodo,deleteAllTodo,deleteTodo}=todosSlice.actions;