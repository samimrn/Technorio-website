import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

function footer() {
  return (
<div> 

<footer className='mt-5'>
<div className='container'>
    <div className='row'>
        <div className='col-3 footer-left'>
            <div className='Logo'>
                <img src='images/logo.png'width={"100px"} height={"100px"}/>
            </div>
            <div className='subscribe my-3'>
                <h5>Subscribe Now</h5>
                <form>
                    <input type="text" placeholder="Enter Email"></input><br/>
                    <button className='btn btn-primary btn-sm my-2'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='col-3 footer-left-left'>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Client</p>
            <p>Career</p>
            <p>Contact</p>
        </div>
        <div className='col-3 footer-right-right'>
            <h5>Services</h5>
            <p>Intern</p>
            <p>Trainee</p>
            <p>Websites</p>
            <p>Mobile</p>
        </div>
        <div className='col-3 footer-right'>
        <h5>Contacts</h5>
            <p>Email: Technoria@info.com</p>
            <p>Contact Number: 9800221177</p>   
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaLinkedin/></a>
            <a href='#'><FaTwitter/></a>
        </div>
    </div>
</div>
    <hr></hr>
    <div className='bottom-footer text-center mb-0'>
        <p>All rights Reserved. Copyright &copy; 2022 Technorio</p>
    </div>
</footer>

</div>
  )
}

export default footer