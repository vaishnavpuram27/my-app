import React from 'react'
import{Outlet, useNavigate} from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>
            Contact Page
        </h1>
        <button className='btn btn-primary' 
        onClick={()=>{navigate("FunCounter")}}>COunter</button>
        <Outlet/>
    </div>
  )
}

export default Contact