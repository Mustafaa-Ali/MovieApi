import React from 'react'
import { useNavigate } from 'react-router-dom'



 function NotFound() {

   const navigate =  useNavigate()

    const handleNavigation=() =>{
        navigate("/")
    }
  return (
    <div><h1>404</h1>
    <h2>Page Not Found</h2>
    <button onClick={()=>handleNavigation()}>Back To Home</button></div>
  )
}
export default NotFound