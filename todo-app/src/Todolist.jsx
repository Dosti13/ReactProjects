import './todolist.css'
import TodoItem from './TodoItem'


export default function Todo({todos,settodos,settask ,setEditingIndex}){


    return(
        <>
            <div className='text'>
            {todos.map((todo,index)=>{
                
             return (<TodoItem key={index} index={index}
                 todo={todo} todos={todos} settodos={settodos} settask={settask} setEditingIndex={setEditingIndex}/>   )
            })}
        </div>
        
</>
    
    )
}