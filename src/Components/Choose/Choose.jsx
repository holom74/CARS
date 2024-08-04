import React from 'react'
import Audi from '../../assets/imges/sec-5/Audi 1.png'
import user from '../../assets/imges/sec-5/user.png'
import message from '../../assets/imges/sec-5/message.png'
import chat from '../../assets/imges/sec-5/chat.png'

import styles from './Choose.module.css'

export default function Choose() {
  return (
    <>
      <div className={`container-fluid my-5 py-5 justify-content-between ${styles.bgImg}`}>
        <div className='row'>
          <div className='col-md-6  align-items-center '>
            <img src={Audi} alt="AudiCar" />
          </div>

          <div className='col-md-5  align-items-center '>
            <div>
              <button className='btn btn-outline-info' >WHY CHOOSE US</button>
              <h4 className=' my-3'> We offer the best experience with our rental deals</h4>
            </div>

            <div className='d-flex align-items-center'>
              <img src={user} alt="" className='p-3 ps-0' />
              <article>
                <h6 className='mb-0'>Best price guaranteed</h6>
                <small> Find a lower price? We’ll refund you 100% of the difference.</small>
              </article>
            </div>
            <div className='d-flex align-items-center'>
              <img src={user} alt="" className='p-3 ps-0' />
              <article>
                <h6 className='mb-0'> 24 hour car delivery</h6>
                <small> Book your car anytime and we will deliver it directly to you.</small>
              </article>
            </div>
            <div className='d-flex align-items-center'>
              <img src={message} alt="" className='p-3 ps-0' />
              <article>
                <h6 className='mb-0'>Best price guaranteed</h6>
                <small>Find a lower price? We’ll refund you 100% of the difference.</small>
              </article>
            </div>
            <div className='d-flex align-items-center'>
              <img src={chat} alt="" className='p-3 ps-0' />
              <article>
                <h6 className='mb-0'>24/7 technical support</h6>
                <small>Have a question? Contact Rentcars support any time when you have problem.</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
