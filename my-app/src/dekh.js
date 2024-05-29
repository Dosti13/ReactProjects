import { useState,useEffect } from "react";

export default  function Appi(){
    useEffect((
        fetch('https://dummyjson.com/products/1').then(
            (response)=>{
                    return response.json()
            }
        ).then((data) => {
            
               console.log(data)
        })

    ))
    return(
        <div>

        </div>
    )


}