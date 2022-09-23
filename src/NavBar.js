import React from 'react'
import { Link ,NavLink } from 'react-router-dom'

function NavBar() {
  const navLinkStyle=({isActive})=>{
    return(
      {
        fontWeight:isActive?'bold':'normal',
        // textDecoration:isActive?'none':'underline',
        color:isActive?"white":"black",
        // fontSize:isActive?"20px":"5px",
        padding:'1em'
      }
    )
    
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#5CB8E4"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home" style={{color:"white", fontWeight:"bold"}}>Tiles Company</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="/" style={{fontWeight:"bolder"}}>Home</a> */}
          <NavLink to="/Home" className='nav-link' style={navLinkStyle}>Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="/Tiles" style={{fontWeight:"bolder"}}>Tiles</a> */}
          <NavLink to="/Tiles" className='nav-link' style={navLinkStyle}>Tiles</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/Contact" style={{fontWeight:"bolder"}}>Contact</a> */}
          <NavLink to="/Contact" className='nav-link' style={navLinkStyle}>Contact</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href='/Profile' style={{fontWeight:"bolder"}}>Profile</a> */}
          <NavLink to="/Profile" className='nav-link' style={navLinkStyle}>Profile</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href='/Register' style={{fontWeight:"bolder"}}>Register</a> */}
          <NavLink to="/" className='nav-link' style={navLinkStyle}>Login</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="/Tiles" style={{fontWeight:"bolder"}}>Tiles</a> */}
          <NavLink to="/Location" className='nav-link' style={navLinkStyle}>Location</NavLink>

        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar