import React from 'react'
import caricon from '../../assets/imges/secWork/car-icon.png'
import location from '../../assets/imges/secWork/location.png'
import audi from '../../assets/imges/secWork/audi.png'
import jaguar from '../../assets/imges/secWork/jaguar.png'
import volvo from '../../assets/imges/secWork/volvo.png'
import nissan from '../../assets/imges/secWork/nissan.png'

import styles from './Work.module.css'


export default function Work() {
  return (
    <>
      <section >
        <div className=' d-flex justify-content-center m-4 pt-5'>
          <button className='btn btn-outline-primary  rounded-2'> HOW IT WORK </button>
        </div>
        <h2 className='text-center m-4'> Most popular cars rental deals</h2>
        <div className='d-flex justify-content-center flex-wrap container '>
          <div className={`d-flex flex-column align-items-center px-4 mx-4 ${styles[`card-work`]} my-2 `} > 
            <div className='p-4 text-center'>
            <img className='card-img-top' src={location} alt="Card image cap" />
            </div>
            <div className="card-body ">
            <h5 className="card-title mb-2">Choose location</h5>
            <small className=" text-center ">Choose your and find your best car</small>
            </div>
          </div>
          <div className={`d-flex flex-column align-items-center px-4 mx-4 ${styles[`card-work`]} my-2`}>
              <div className='p-4 text-center'>
              <img className='card-img-top ' src={caricon} alt="Card image cap" />
              </div>
            
            <div className="card-body">
            <h5 className="card-title mb-2">Pick-up date</h5>
            <small className=" text-center">Select your pick up date and time to book your car</small>
            </div>
          </div>
          <div className={`d-flex flex-column align-items-center px-4 mx-4 ${styles[`card-work`]} my-2`}> 
            <div className='p-4 text-center'>
              <img className='card-img-top' src={location} alt="Card image cap" />
            </div>
            <div className="card-body">
            <h5 className="card-title mb-2">Book your car</h5>
            <small className=" text-center ">Book your car and we will deliver it directly to you</small>
            </div>
          </div>
        </div>
      </section>
      
      <section className='container px-4 d-flex justify-content-around flex-wrap my-5'>
        <img src={audi} className=' mx-2' alt="ad_car" />
        <img src={jaguar} className=' mx-2' alt="ad_car" />
        <img src={volvo} className=' mx-2' alt="ad_car" />
        <img src={nissan} className=' mx-2' alt="ad_car" />

      </section>
    
    </>
  )
}
