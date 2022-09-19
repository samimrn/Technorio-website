import React from 'react'

function header() {
  return (
<div>    
    <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
            <a className="logo navbar-brand d-lg-none" href="/">
                <img src="images/logo.png" width={"100px"} height={"100px"}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Responsive">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="Responsive">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/About">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Services">Our Services</a>
                </li>
                <li>
                    <a className="logo navbar-brand d-none d-lg-block" href="/">
                        <img src="images/logo.png" width={"100px"} height={"100px"}/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Team">Our Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Career</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' href="/Contactform">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default header
