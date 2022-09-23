import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div className="container center">
        <h1>
            LOGIN
        </h1>
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={()=>{navigate("/Home")}} className="col-lg-5 m-6 " >
    <div className="mb-3 row">
  <label for="exampleFormControlInput1" className="col-sm-2 col-form-label">Email address</label>
  <div className='col-sm-10'>
  <input type="email" class="form-control" id="exampleFormControlInput1" required/>

  </div>
</div>

  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" required/>
    </div>
  </div>
  <input type="submit" className="btn btn-primary" />
  </form>
    </div>
    
        
    </div>
  )
}

export default Login