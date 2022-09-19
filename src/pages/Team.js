import React from 'react'

function Team() {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-3'>Our Teams</h2>
        <div className='row mt-3'>
            <div className='col-lg-6 col-md-12'>
                <div className='team-box'>
                    <div className='team-image'>
                        <img src='images/employee1.jpg'/>
                    </div>
                    <div className='team-info'>
                        <h4>Charlie Desoza</h4>
                        <span>CEO</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-12'>
            <div className='team-box'>
                    <div className='team-image'>
                        <img src='images/employee2.jpg'/>
                    </div>
                    <div className='team-info'>
                        <h4>Barbera Hallway</h4>
                        <span>Co-founder</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-12'>
                <div className='team-box'>
                    <div className='team-image'>
                        <img src='images/employee3.jpg'/>
                    </div>
                    <div className='team-info'>
                        <h4>Jack Chan</h4>
                        <span>Finance Manager</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-12'>
            <div className='team-box'>
                    <div className='team-image'>
                        <img src='images/employee4.jpg'/>
                    </div>
                    <div className='team-info'>
                        <h4>Albert Jackson</h4>
                        <span>HR Manager</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
