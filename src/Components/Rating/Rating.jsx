import React from 'react'
import star from '../../assets/imges/rating/star.png'
import Rectangle from '../../assets/imges/rating/Rectangle.png'
import styles from './Rating.module.css'


export default function Rating() {
  return (
    <>
      <div className={`${styles.rating}  pb-5  container-fluid`}>
        <div className='d-flex flex-column mt-5'>
          <button className='btn btn-info  rounded-2 m-auto mt-5'> TEST IMONIALS </button>
          <h1 className='text-center m-4 mb-5'>Most popular cars rental deals</h1>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5 card">
            <div className="row ">
              <div className="col-md-6  img-fluid rounded-start">
                <img className=' card-img w-100' src={Rectangle} alt="Rectangleimg" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">5.5 <small>stars</small></h1>
                  <div>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p className='card-text my-4'>
                    “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”
                  </p>
                  <div className='card-text '>
                    <p className='bold mb-0'>Charlie Johnson</p>
                    <small className=' text-muted '> Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card">
            <div className="row ">
              <div className="col-md-6 img-fluid rounded-start">
                <img className=' card-img' src={Rectangle} alt="Rectangleimg" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">5.5 <small>stars</small></h1>
                  <div>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p className='card-text my-4'>
                    “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”
                  </p>
                  <div className='card-text '>
                    <p className='bold mb-0'>Charlie Johnson</p>
                    <small className=' text-muted '> Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
