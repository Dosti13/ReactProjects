import React from "react";
import { useState } from "react";
import "./count.css"
function Count (){
    const [cont ,setcont] = useState(0)
    function addvalue(){
         setcont(cont +1)
    }
    function revvalue(){
        if (cont > 0){
            setcont(cont-1)

        }
    }
    return(
        <>        
        <div className="card">
        <div className="head">   
        <h1> count {cont}</h1>
        </div>
        <div className="btn">
        <button onClick={addvalue}> Add {cont} </button>
        <button onClick={revvalue}>Reverse {cont}</button></div></div>
    </>

    )
}
export default Count