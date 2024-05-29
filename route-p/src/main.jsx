import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import LayOut from './LayOut.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'
import User from './User/User.jsx'
import ErrorHandle from './Github/Githuberror.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>

      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route 
      path='Github' 
      loader={githubInfoLoader}
      element={<Github/>}
      errorElement={<ErrorHandle/>}
      />
      <Route path='User/:userid' element={<User/>}/>s
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
