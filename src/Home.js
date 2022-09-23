import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    function redirect(){
        navigate('/Tiles')
    }
  return (
    

    <div>
        <h1>
            Home Page
        </h1>
        <button className='btn btn-primary' onClick={redirect}>Go to Tiles List</button>
    </div>
  )
}

export default Home