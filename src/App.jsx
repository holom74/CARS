
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Work from './Components/Work/Work'
import Choose from './Components/Choose/Choose'
import Rating from './Components/Rating/Rating'
import Download from './Components/Download/Download'
import Footer from './Components/Footer/Footer'
import Popular from './Components/Popular/Popular'
import AllCars from './Components/AllCars/AllCars'
import CarInfo from './Components/CarInfo/CarInfo'
import Home from './Components/Home/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      errorElement: <NotFound />,
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "AllCars", element: <AllCars /> },
        { path: 'CarInfo', element: <CarInfo/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
