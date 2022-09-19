import React from 'react'
import { MdOutlineDesignServices } from 'react-icons/md'
import {MdOutlineDeveloperMode} from 'react-icons/md'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {FaRocket} from 'react-icons/fa'


function About() {
  return (
    <div className='about'>
      
      <div className='container'>
        <h2 className='text-center mt-3'>About Us</h2>
            <div className='row mt-3'>
                <div className='col-sm-12 col-md-6 mt-5'>
                  <h4>What we provide?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col-sm-12 col-md-6'>
                  <img src='images/about.jpg' className='img-fluid'></img>
                </div>
            </div>
      </div>
    <div className='container'>
    
      <nav className='mt-3 center'>
        <ul className='nav' id="nav-tab">
          <li className='tab-box'>
            <a class="nav-link active" id="nav-design-tab" data-bs-toggle="tab" data-bs-target="#nav-design" aria-controls="nav-design" aria-selected="true"> 
            <MdOutlineDesignServices/>
            </a>
          </li>
          <li className='tab-box'>
            <a class="nav-link" id="nav-develop-tab" data-bs-toggle="tab" data-bs-target="#nav-develop"  aria-controls="nav-develop" aria-selected="false"> 
            <MdOutlineDeveloperMode/>
            </a>
          </li>
          <li className='tab-box'>
            <a class="nav-link" id="nav-test-tab" data-bs-toggle="tab" data-bs-target="#nav-test"  aria-controls="nav-test" aria-selected="false"> 
            <BsFillFileEarmarkCodeFill/>
            </a>
          </li>
          <li className='tab-box'>
            <a class="nav-link" id="nav-deploy-tab" data-bs-toggle="tab" data-bs-target="#nav-deploy"  aria-controls="nav-deploy" aria-selected="false"> 
            <FaRocket/>
            </a>
          </li>
        </ul>
      </nav>
      <div className='row'>
        <div className='col-sm-12 col-md-6 mt-5'>
          <div className='tab-content mt-5' id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab">
              <div className=''>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-develop" role="tabpanel" aria-labelledby="nav-develop-tab">
              <div className=''>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-test" role="tabpanel" aria-labelledby="nav-test-tab">
              <div className=''>
                <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-deploy" role="tabpanel" aria-labelledby="nav-deploy-tab">
              <div className=''>
                <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div> 
        <div className='col-sm-12 col-md-6 mt-5'>
          <img className='img-fluid' src='images/about2.jpg'/>
        </div> 
      </div>
    </div>
    </div>
  )
}

export default About
