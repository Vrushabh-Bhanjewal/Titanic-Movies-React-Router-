import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import { contactData } from './pages/Contact'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Applayout from './Component/layout/Applayout'
import ErrorPage from './pages/ErrorPage'
import { getMovieData } from './API/GetMovieApi'
import Moviedetails from './pages/Moviedetails'
import Contact from './pages/Contact'
import { getmoviedetails } from './API/Getmoviedetails'

const App = () => {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:"/Movies",
          element:<Movies/>,
          loader:getMovieData,
        },
        {
          path:"/Movies/:movieID",
          element:<Moviedetails/>,
          loader:getmoviedetails,
        },
        {
          path:'/contact',
          element:<Contact/>,
          action:contactData
        }
      ]
    } 
])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Home/>} />
//       <Route path='/about' element={<About/>} />
//       <Route path='/movies' element={<Movies/>} ></Route>
//       <Route path='/service' element={<Service/>} ></Route>
//     </Route>
//   )
// )

  return <RouterProvider router={router}/>
}

export default App
