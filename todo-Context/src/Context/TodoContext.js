import React, { createContext, useContext } from "react";

export const TodoContext = createContext(
{    todos:[
    {
        id:1,
        todo:"hrllo",
        Complete:false
    }
],
addTodo:(todo)=>{},
deleteTodo:(id,todo)=>{},
updateTodo:(id)=>{},
toggleTodo:(id)=>{}
}
)
export const TodoProvider = TodoContext.Provider
export const useTodo = ()=>{
    return useContext(TodoContext)
}