import { useState } from "react";
import UserContext from "./Context";
import { useContext } from "react";
export default function UserContextProvider({children}){
    
    const [ user, setuser ] = useState("vbvuhbviyl");
    return(
        <UserContext.Provider value={{user ,setuser}}>
            {children}
        </UserContext.Provider> 
    )
}