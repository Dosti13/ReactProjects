import { useEffect } from "react";

export default  function Appi(){
    useEffect((
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response)=>{
                    return response.json()
            }
        ).then((data) => {
            
               console.log(data)
        })

    ))
 


}