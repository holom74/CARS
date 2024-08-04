import { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate';
import car1 from '../../assets/imges/card/car1.png'
import star from '../../assets/imges/card/star.png'
import user from '../../assets/imges/card/user.png'
import Frame from '../../assets/imges/card/Frame.png'
import Air from '../../assets/imges/card/d8wxke_2_.png'
import arrow from '../../assets/imges/card/arrow-right.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AllCars() {
  const [cars, setcars] = useState([]);
  const [currentpage, setcurentpage] = useState(1);
  const itemsperpage = 12;
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(cars.length / itemsperpage); i++) {

    pageNumbers.push(i);
  }
  const lastindex = currentpage * itemsperpage;
  const startindex = lastindex - itemsperpage;

  const currentcar = cars.slice(startindex, lastindex);

  const handelclick = (pageNumber) => {
    setcurentpage(pageNumber);
  }
  const handelpre = () => {
    if (currentpage == pageNumbers[0]) {
      setcurentpage(currentpage);
    }else{
      setcurentpage(currentpage -1);
    }

    // setcurentpage(currentpage - 1);
  }
  const handelnext = () => {
    if (currentpage == pageNumbers.length) {
      setcurentpage(currentpage);
    }else{
      setcurentpage(currentpage + 1);
    }

    
  }

  let getcars = async () => {
    try {
      let response = await axios.get(
        "https://freetestapi.com/api/v1/cars"
      )
      setcars(response.data);

    } catch (error) {
      console.log("error is :", error);
    }
  }
  useEffect(() => {
    getcars();
  }, []);

  const [search,setsearch]=useState('')

  return (
    <>
      <div className=' container-fluid pt-4 '>
        <div className=' container'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">AllCars</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className=' container-fluid py-4 '>
        <div className=' container'>

          <div className='d-flex justify-content-center m-4'>
            <button className='btn btn-info rounded-2'>POPULAR RENTAL DEALS</button>
          </div>
          <h1 className='text-center m-4'>Most popular cars rental deals</h1>
          {/* search */}
          <form className="d-flex">
            <span className='m-auto mx-1' > <i className="fa-solid fa-location-dot"></i></span>
            <input className="form-control me-2" type="text"
            onChange={(e)=>setsearch(e.target.value)}
              placeholder="Search by name ......"  />

            <button className="btn btn-info" type="submit">Search</button>
          </form>
          {/*card */}

          <div className=' row my-5'>

            {currentcar.filter((car)=>{
              return search.toLowerCase()===''? car : car.make.toLowerCase().includes(search)
            }).map((car) => (
                <div className='col-md-3 ' key={car.id}>
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
                          <small className=' text-muted mx-1 text-nowrap'  >2 person</small>
                        </div>
                        <div className="col-md-6 text-nowrap">
                          <img src={Air} alt="Frame" />
                          <small className=' text-muted mx-1 text-nowrap'>Air conditioning</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-nowrap">
                          <img src={Frame} alt="doors" />
                          <small className=' text-muted mx-1 text-nowrap'>{car.transmission}</small>
                        </div>
                        <div className="col-md-6 text-nowrap">
                          <i className='fa-solid fa-calendar-days me-2'></i>
                          <small className=' text-muted mx-1 text-nowrap'>{car.year}</small>
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
                        <Link className="nav-link" to='/CarInfo'>
                          <h6>viwe detils <img className=' mx-2' src={arrow} alt="" /> </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


          {/* pagination */}
          <nav aria-label="d-flex mb-5">
            <ul className="pagination justify-content-center ">
              <li className="page-item">
                <a className="page-link" href="#!" onClick={handelpre} >Previous</a>
              </li>
              {pageNumbers.map((Number) => (
                <li key={Number} className={`page-item ${currentpage === Number ? 'active' : ''}`}>
                  <a className="page-link" href="#!" onClick={() => handelclick(Number)} >{Number}</a>
                </li>
              ))}
              <li className="page-item">
                <a className="page-link" href="#!" onClick={handelnext}>Next</a>
              </li>
            </ul>
          </nav>


        </div>



      </div>





    </>
  )
}
