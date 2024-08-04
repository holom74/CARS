import React, { useEffect, useState } from 'react'

import car1 from '../../assets/imges/card/car1.png'
import star from '../../assets/imges/card/star.png'
import user from '../../assets/imges/card/user.png'
import Frame from '../../assets/imges/card/Frame.png'
import Air from '../../assets/imges/card/d8wxke_2_.png'
import arrow from '../../assets/imges/card/arrow-right.png'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Popular() {
  const [cars, setcars] = useState([]);

  let getcars = async () => {
    let response = await axios.get(
      "https://freetestapi.com/api/v1/cars?limit=4"
    )
    setcars(response.data);
    console.log(cars);
  }
  useEffect(() => {
    getcars();
  }, []);


  return (
    <>
      <div className=' container-fluid py-4 '>
        <div className=' container'>
          <form className="d-flex">
            <span className='m-auto mx-1' > <i className="fa-solid fa-location-dot"></i></span>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-info" type="submit">Search</button>
          </form>
          <div className='d-flex justify-content-center m-4'>
            <button className='btn btn-info rounded-2'>POPULAR RENTAL DEALS</button>
          </div>
          <h1 className='text-center m-4'>Most popular cars rental deals</h1>
          {/* srat card */}

          <div className=' row my-5'>
            {cars.map((car) => (
                <div className='col-lg-3 ' key={car.id}>
                  <div className="card shadow m-3" >
                    <div className='d-flex justify-content-center m-4'>
                      <img src={car1} className="card-img-top" alt="car" />
                    </div>
                    <div className="card-body mx-4">
                      <h5 className="card-title">{car.make} {car.model}</h5>
                      <div className=' d-flex align-items-baseline'>
                        <img src={star} alt="star" />
                        <h6 className=' mx-2'>4.6</h6>
                        <small className=' text-muted'>(1345 reviews)</small>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-nowrap">
                          <img src={user} alt="user" />
                          <small className=' text-muted mx-1 '  >2 person</small>
                        </div>
                        <div className="col-md-6 text-nowrap">
                          <img src={Air} alt="Frame" />
                          <small className=' text-muted mx-1 '>Air conditioning</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-nowrap">
                          <img src={Frame} alt="doors" />
                          <small className=' text-muted mx-1 '>{car.transmission}</small>
                        </div>
                        <div className="col-md-6 text-nowrap">
                          <i className='fa-solid fa-calendar-days me-2'></i>
                          <small className=' text-muted mx-1 '>{car.year}</small>
                        </div>
                      </div>
                      <hr className=' text-dark' />
                      <div className='d-flex justify-content-between'>
                        <p className='text-muted'> {car.price} </p>
                        <div className='d-flex'>
                          <h6 >$25000</h6>
                          <span> / </span>
                          <small className='text-muted'> day</small>
                        </div>
                      </div>
                      <div className=' d-flex btn btn-info justify-content-center'>
                      <Link  className="nav-link" to='CarInfo'> 
                        <h6>viwe detils <img className=' mx-2' src={arrow} alt="" /> </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))
            }
          </div>

          <div className=' d-flex justify-content-center mt-5 align-item-center '>
            <div className=' d-flex bg-dark-subtle justify-content-center btn btn-outline-dark'>
            <Link  className="nav-link" to='AllCars'> 
              <h5 >viwe all cars  
              <img className=' mx-2' src={arrow} alt="" />
              </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
