import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

function Services() {
  return (
<div>

    <div className='container mt-3 service'>
        <h2 className='text-center'>Services</h2>
        <div className='row mt-5 inner-services'>
            <div className='col-md-4'>
                <img src="images/webdesign.png" className='img-fluid'/>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='col-md-4'>
                <img src="images/webhosting.png" className='img-fluid'/>
                <h3>Web Hosting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='col-md-4'>
                <img src="images/seo.jpg" className='img-fluid'/>
                <h3>Search Engine Optimization</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
    <div className='container tools mt-4'>
        <h2 className='text-center'>Tools used for the attractive projects</h2>
        <div className='row mt-5'>
            <div className='col-sx col-sm-6 col-md-4'>
                <div className='icon-box'>
                    <div className='icons text-center'>
                        <FaReact/>
                    </div>
                </div>
            </div>
            <div className='col-sx col-sm-6 col-md-4'>    
            <div className='icon-box'>
                    <div className='icons text-center'>
                        <FaHtml5/>
                    </div>
                </div>
            </div>
            <div className='col-sx col-sm-6 col-md-4'>
            <div className='icon-box'>
                    <div className='icons text-center'>
                        <FaCss3/>
                    </div>
            </div>
            </div>
            <div className='col-sx col-sm-6 col-md-4'>
            <div className='icon-box'>
                    <div className='icons text-center'>
                        <FaBootstrap/>
                    </div>
                </div>
            </div>
            <div className='col-sx col-sm-6 col-md-4 '>
            <div className='icon-box'>
                    <div className='icons text-center'>
                        <FaPhp/>
                    </div>
                </div>
            </div>
            <div className='col-sx col-sm-6 col-md-4 '>
            <div className='icon-box'>
                    <div className='icons text-center'>
                        <SiMysql/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>


</div>
  )
}

export default Services
