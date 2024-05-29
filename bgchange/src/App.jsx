
import './App.css'
import { useState } from 'react'
function App() {
  const [color,setcolor] = useState("burlywood")

  return (
    <>
      <section className='main' style={{backgroundColor:color}}>
        <div className='btn'>
          <button onClick={() => setcolor("red")}>Red</button>
          <button onClick={() => setcolor("blue")}>Blue</button>
          <button onClick={() => setcolor("green")}>Green </button>
          <button onClick={() => setcolor("Aqua")}>Aqua</button>
          <button onClick={() => setcolor("pink")}>Pink</button>
          <button onClick={() => setcolor("purple")}>Purple</button>
          <button onClick={() => setcolor("olive")}>Olive</button>
        </div>
      </section>
    </>
  )
}

export default App
