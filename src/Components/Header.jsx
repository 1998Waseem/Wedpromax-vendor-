import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import loginicon from '../assets/icons/loginicon.svg'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary headerbar">
<div className="container">
  <Link className="navbar-brand logoname" to="/"><span className="span1">WED</span><span className="span2">PRO</span><span className="span3">MAX</span></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/browsehalls">Browse Halls</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/aboutus">About us</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact us</Link>
      </li>
     
    </ul>
    {/* <form className="d-flex" role="search"> */}
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <img src={loginicon} alt="loginicon" className='loginicon' />
    {/* </form> */}
  </div>
</div>
</nav>
    </>
  )
}

export default Header
