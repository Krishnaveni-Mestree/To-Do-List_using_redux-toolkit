import { createSlice } from "@reduxjs/toolkit";
import AddTodo from "../../components/AddTodo";


const todosSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{},
        updateTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{},
        deleteAllTodo:()=>{}
    }
})

export default todosSlice.reducer;
export const {addTodo,updateTodo,deleteAllTodo,deleteTodo}=todosSlice.actions;