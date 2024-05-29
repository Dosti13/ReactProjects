
import { name } from 'tar/types'
import './App.css'
import List from './New'
import { useState } from 'react'
import Appi from './api'

function App() {
// let [name ,setname] = useState("")
//   const list= [
//     {name:"dosti" ,sub:"eng", roll:"2"},
//     {name:"asad" ,sub:"sin", roll:"3"},
//     {name:"hmza" ,sub:"ur", roll:"4"},
//     {name:"amna" ,sub:"phy", roll:"6"}
  
//   ]
//   const changehandler = (e)=>{
//     setname(e.target.value)
  
      
//   }
return (
   
//     <>
  
//     <div>
//       <form action="">
//       <input  
//       onChange={(e)=>  changehandler(e) } 
//       type="text" 
//       value={name}/></form>
//   {list.map((lists)=>(
    

//   <List key={lists.name}  name={lists.name} sub={lists.sub} roll={lists.roll}/> 
//   ))}
//     </div>

<>
  <Appi />
    </>
  )
}

export default App
