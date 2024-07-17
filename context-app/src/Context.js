import React, { createContext, useContext } from 'react';
// const UserContext = createContext()
// export default UserContext
const UserContext = createContext()
const provider = UserContext.Provider
const UseesContext = useContext(UserContext)



