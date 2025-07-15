import { createSlice } from "@reduxjs/toolkit";
import AddTodo from "../../components/AddTodo";


const todosSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload})
        },
        updateTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{},
        deleteAllTodo:()=>{}
    }
})

export default todosSlice.reducer;
export const {addTodo,updateTodo,deleteAllTodo,deleteTodo}=todosSlice.actions;