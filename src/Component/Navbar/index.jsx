
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Navbar() {
  const [loggedin,setloggedin] = useState(false)

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(!token){
      setloggedin(false)
    }
    else{
      setloggedin(true)
    }
  },[loggedin])

  const Loggouthandler =(()=>{
    localStorage.clear()
    setloggedin(false)
  })


  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/books">
                  Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {
          loggedin?(
            <Link onClick={Loggouthandler} className="btn btn-danger">Logout</Link>

          ):(
            <Link to='/login' className="btn btn-primary">LogIn</Link>

          )



        }
      </nav>
    </>
  );
}

export default Navbar;
