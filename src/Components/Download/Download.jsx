import React from 'react'
import iPhone from '../../assets/imges/dowm/iPhone-14.png'
import andriod from '../../assets/imges/dowm/andriod.png'
import ios from '../../assets/imges/dowm/ios.png'


export default function Download() {
  return (
    <>
      <div className="container-fluid  ">
        <div className=' container ' >
          <div className="row mt-5 justify-content-md-around">
            <div className="col-md-7 ">
              <div>
                <h1 >Download Rentcars App for <span className='text-primary'>FREE </span></h1>
                <small>For faster, easier booking and exclusive deals.</small>
              </div>
              <div className="imgs my-3 col-md-7 d-flex justify-content-center ">
                <img className=' mx-5' src={andriod} alt="andriodStor" />
                <img className=' mx-5' src={ios} alt="iosStor" />
              </div>
              <form className=' d-flex flex-column col-md-7 '>
                <div className=' mb-3'>
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
                </div>
                <div className=' mb-3'>
                <label htmlFor="exampleInputName" className="form-label"></label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="" placeholder='Name' />
                </div>
                <div className=' mb-3'>
                <label htmlFor="exampleInpuNaN" className="form-label"></label>
                <input type="tel" className="form-control" id="exampleInputNaN" 
                    pattern="\d{10}"  aria-describedby="" placeholder='Phone Number' />
                </div>
                <div className='d-flex justify-content-center my-2'>
                  <button type="submit" className="btn bold btn-primary px-5 ">send</button>
                </div>
                
              </form>
            </div>



            <div className="col-md-4 align-content-end  ">

              <img className=' w-75  ' src={iPhone} alt="iPhoneimg" />
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
