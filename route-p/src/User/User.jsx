import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
return(
    <div className=" bg-gray-300 w-100 p-2 text-center text-xl">User :{userid}</div>
)
}