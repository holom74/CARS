import React from 'react'
import Car from '../../assets/imges/header/car 2 1.png'
import frame from '../../assets/imges/header/Frame.png'
import stelyes from  './Header.module.css'

export default function Header() {
  return (
    <>
      <div className={`container-fluid d-flex justify-content-between align-items-center ${stelyes.bgImg}`}>
        <div className=' ms-5 col-md-3 '>  
          <h1 className=' mb-2'>Find, book and rent a car <span className=' text-info'>Easily </span></h1>
          <p> Get a car wherever and whenever you need it with your IOS and Android device.</p>
        </div>
        <div className={`col-md-6 ${stelyes.car}`} > 
          <img src={Car}  alt="carImg" className='mt-5' />
        </div>
      </div>
    
    </>
  )
}
