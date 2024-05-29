import {useEffect, useCallback, useState,useRef } from 'react'
import './App.css'

function App() {
  const [lenght, setlength] = useState(6)
  const [Number, setNumber] = useState(false)
  const [Character ,setchahracter] = useState (false)
  const [password,setpassword] = useState("")
  
  const passwordRef = useRef(null)

  const PasswordGenrator = useCallback(()=>{ 
    let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (Number)str +="123456789"
  if(Character) str +="!@#$%^&*(){}"
for (let i = 1; i <= lenght; i++) {
  let char = Math.floor(Math.random() * str.length +1)
  pass += str.charAt(char)
}

setpassword(pass)

},[lenght,Number,Character,setpassword])
 useEffect (()=>{
  PasswordGenrator()
 }
 ,[lenght,Number,Character,PasswordGenrator])
  
 const copytoClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    
 },[password])
  return (
    <>
     <section className='main-sec'>
      <div className="main">
        <div className="value">
          <input type="text"
          placeholder='password'
           value={password}  
           ref={passwordRef}
           readOnly />
          <button onClick={copytoClip}>Copy</button>
</div>
        
        <div className="function">
          <input
           type="range" 
           min={1} max={50} 
           value={lenght}
           onChange={(e)=> {setlength(e.target.value)}}
           />
          <label >length{lenght}</label>
          <label >Number </label>
          <input type="checkbox"
          defaultChecked={Number}
          onChange={() => {setNumber((prev)=>  !prev)}}
          />
          <label htmlFor="">Character</label>
          <input type="checkbox" 
          defaultChecked={Character}
          onChange={() => {setchahracter((prev)=>  !prev)}} />
        </div>
      </div>
      
     </section>
    </>
  )
}

export default App
