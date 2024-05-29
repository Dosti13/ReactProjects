import { useState } from 'react'
import './App.css'
import Form from './Form'
import Todo from './Todolist'
import Completed from './Completed'

function App() {
  const [task, settask] = useState({name:"", Completed:false })
  const [editingIndex, setEditingIndex] = useState(null);

  const [todos ,settodos] = useState([])
  let completetodo= todos.filter((todo)=>todo.completed)
  let ac = completetodo.length
  let t = todos.length  
    return (
    <>
    <div className='header'>
      <h1>Todo app </h1>
    </div>

  <Form todos={todos} settodos={settodos}  task={task} settask={settask} setEditingIndex={setEditingIndex} editingIndex={editingIndex}/>
  <Todo todos={todos} settodos={settodos} settask={settask}  setEditingIndex={setEditingIndex}/>
  <Completed ac={ac} t={t} settask={settask}/>
    </>
  )
}

export default App
