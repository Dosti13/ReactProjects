import { useContext, useState } from 'react'
import './App.css'
import React from 'react';
import UserContextProvider from './Usecontextprovider';
import MyConsumer from './Consume';
function App() {
 
  return (
    <>  
    <UserContextProvider>
    <MyConsumer/>
    </UserContextProvider>

    </>
  )
}

export default App
