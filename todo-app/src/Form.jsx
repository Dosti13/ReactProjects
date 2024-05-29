import { useState } from "react"
import './form.css'


export default function Form({todos,settodos,task,settask,setEditingIndex,editingIndex}) {
   

    const handleIn= (e) =>{
        
        settask({name:e.target.value,Completed:false})
      
    }
    const handlesumbit = (e)=> {
        e.preventDefault()
        if (editingIndex === null) {
            settodos([...todos, task]);
            settask({ name: "", Completed: false });
          } else {
            const updatedTodos = [...todos];
            updatedTodos[editingIndex] = task;
            settodos(updatedTodos);
            setEditingIndex(null);
            settask({ name: "", Completed: false });
          }
      }
    return(
        <>
    <form className="main" onSubmit={handlesumbit}>
     <div className="container">   
          <input type="text"
          value={task.name}
          placeholder={editingIndex === null ? 'add task' : 'update task'}
          onChange={handleIn}
          />
          <button type='submit'>Add</button>
        </div>
        </form> 
        </>
    )
}