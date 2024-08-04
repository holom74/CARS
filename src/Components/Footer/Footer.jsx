import React from 'react'
import logo from '../../assets/imges/footer/logo-footer.png'
import location from '../../assets/imges/footer/location.png'
import call from '../../assets/imges/footer/call.png'
import sms from '../../assets/imges/footer/sms.png'
import facebook from '../../assets/imges/footer/facebook.png'
import youtube from '../../assets/imges/footer/youtube.png'
import instagram from '../../assets/imges/footer/instagram.png'

export default function Footer() {
  return (
    <>
      <footer className=' container-fluid py-5 bg-dark'>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-3 me-3 mb-5">
              <img src={logo} alt="logo" className=" mb-3" />
              <div className=' d-flex'>
                <img src={location} alt="" className='align-self-center me-2' />
                <div className=' d-flex flex-column'>
                  <small>25566 Hc 1, Glenallen,</small>
                  <small> Alaska, 99588, USA</small>
                </div>

              </div>
              <div className='d-flex my-2'>
                <img src={call} alt="" className='me-2' />
                <small> +603 4784 273 12</small>
              </div>
              <div className='d-flex my-2'>
                <img src={sms} alt="" className='me-2' />
                <small>rentcars@gmail.com</small>
              </div>
            </div>
            <div className="col-md-2  me-3 mb-5">             
              <ul >
                <li className="list-group-item"><p className='mb-4'>Our Products</p></li>
                <li className="list-group-item"><small>Career</small></li>
                <li className="list-group-item"><small>Car</small></li>
                <li className="list-group-item"><small>Packages</small></li>
                <li className="list-group-item"><small>Features</small></li>
                <li className="list-group-item"><small>Priceline</small></li>
              </ul>
            </div>

            <div className="col-md-2  mb-5">             
              <ul >
                <li className="list-group-item"><p className='mb-4'>Resources</p></li>
                <li className="list-group-item"><small>Download</small></li>
                <li className="list-group-item"><small>Help Centre</small></li>
                <li className="list-group-item"><small>Guides</small></li>
                <li className="list-group-item"><small>Partner Network</small></li>
                <li className="list-group-item"><small>Cruises</small></li>
                <li className="list-group-item"><small>Developer</small></li>
              </ul>
            </div>
            <div className="col-md-2  mb-5">             
              <ul >
                <li className="list-group-item"><p className='mb-4'>About Rentcars</p></li>
                <li className="list-group-item"><small>Why choose us</small></li>
                <li className="list-group-item"><small>Our Story</small></li>
                <li className="list-group-item"><small>Investor Relations</small></li>
                <li className="list-group-item"><small>Press Center</small></li>
                <li className="list-group-item"><small>Advertise</small></li>
              </ul>
            </div>
            <div className="col-md-2  mb-5">
              <p className='mb-4'> Follow Us</p>
              <div>
                <img src={facebook} alt="" />
                <img src={youtube} alt=""  className='mx-3'/>
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className=' text-warning-emphasis' />
        <div className='text-md-center text-white'><small>Copyright 2024 ・ Rentcars, All Rights Reserved</small></div>
      </footer>
    </>
  )
}
