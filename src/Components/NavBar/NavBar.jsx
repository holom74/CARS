// import React from 'react'
import NavImg from '../../assets/imges/nav/logo.png'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container mt-4  z-3">
        <div className="container-fluid">
          <div className="navbar-brand" >
            <img src={NavImg} alt="logo" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-bar-container ms-auto">
              <div className="nav-item mx-5 ">
                <button className="btn bold" type='button'>
                  Become a renter
                </button>
                <button className="btn bold " type='button'>
                  Rental deals
                </button>
                <button className="btn bold " type='button'>
                  How it work
                </button>
                <button className="btn bold " type='button'>
                  Why choose us
                </button>
              </div>
              <div className="nav-item ms-5">
                <button className="btn bold" type='button' >sign in</button>
                <button className="btn bold btn-primary" type='button' >sign up</button>
              </div>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
