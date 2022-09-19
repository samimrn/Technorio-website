import React from 'react'
function carousel() {
  return (
<div> 

<div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/banner.jpg" className="img-fluid d-block w-100"/>
            <div className="carousel-caption">
                <h1 className="display-2">Welcome to Website</h1>
                <h3>This is Carousel</h3>
                <button type="button" className="btn btn-outline-light btn-lg">Login</button>
                <button type="button" className="btn btn-primary btn-lg">Sign up</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pic.jpg" className="img-fluid d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src="images/pic1.jpg" className="img-fluid d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src="images/pic2.jpg" className="img-fluid d-block w-100"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
</div>
      </div>
  )
}

export default carousel