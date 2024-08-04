import React from 'react'
import Audi from '../../assets/imges/sec-5/Audi 1.png'
import user from '../../assets/imges/card/user.png'
import Frame from '../../assets/imges/card/Frame.png'
import doors from '../../assets/imges/card/doors.png'
import Air from '../../assets/imges/card/d8wxke_2_.png'


import styles from './CarInfo.module.css'

import { Link } from 'react-router-dom'

export default function CarInfo() {
  return (
    <>
      <div className=' container-fluid pt-4 '>
        <div className=' container'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/AllCars">AllCars</Link></li>
              <li className="breadcrumb-item active" aria-current="page">CarInfo</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className=' container-fluid my-5 py-5 '>
        <div className={` ${styles.bgImg}`}>
          <div className='row'>
            <div className='col-md-6  align-items-center '>
              <img src={Audi} alt="AudiCar" />
            </div>
            <div className='col-md-5  align-items-center '>
              <div>
                <button className='btn btn-outline-info' >WHY CHOOSE US</button>
                <h4 className=' my-3'> We offer the best experience with our rental deals</h4>
              </div>
              <div className=" my-3 text-nowrap">
                <img src={user} alt="user" />
                <small className=' mx-2 text-nowrap'  >2 person</small>
              </div>
              <div className=" my-3 text-nowrap">
                <img src={Air} alt="Frame" />
                <small className=' text-muted mx-1 text-nowrap'>Air conditioning</small>
              </div>
              <div className="my-3 text-nowrap">
                <img src={Frame} alt="doors" />
                <small className=' text-muted mx-1 text-nowrap'>CVT</small>
              </div>
              <div className="my-3 text-nowrap">
                <img src={doors} alt="doors" />
                <small className=' text-muted mx-1 text-nowrap'>Doors</small>
              </div>


            </div>


          </div>
        </div>
      </div>

    </>
  )
}
