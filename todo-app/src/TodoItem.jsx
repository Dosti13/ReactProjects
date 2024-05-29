import './todoitem.css'
export default function TodoItem( {todo,todos,settodos,index,settask,setEditingIndex}){

    const deletelist = ()=>{
    settodos(todos.filter((to,i) => i!= index))
    }
   const handledone =(name)=> {
   settodos( todos.map((todo)=>todo.name===name? {...todo,completed:!todo.completed} :todo
      
   )
)

   }
  const updatelist = ()=>{

    settask(todo);
    setEditingIndex(index);
  }
  
    return( 
        <>
    <div className="list" >
    <span className={todo.completed ? "listt":"line"} onClick={ () => handledone(todo.name)}>{todo.name}</span>
    <div className='btn'>
    <button onClick={deletelist} className='delete'>X</button>
    <button onClick={updatelist} className='delete'>U</button>
    </div>
    </div>
    <hr />
    
</>
)
}