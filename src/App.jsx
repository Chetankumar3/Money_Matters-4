import React from 'react'
import Home from './Home/Home.jsx'
import Navbar from './Home/Navbar/Navbar.jsx';
import About from './Home/About.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  // const router=createBrowserRouter([
  //   // {
  //   //   path:"/Gallery",
  //   //   element:<><Navbar /><Gallery/></>
  //   // },
  //   {
  //     path:"/",
  //     element:<><Home/></>
  //   },
  //   {
  //     path:"/About",
  //     element:<><About/></>
  //   }
  //   {
  //     path:"/Events",
  //     element:<><Navbar /><Events/></>
  //   },
  //   {path:"/Team",
  //     element:<><Navbar /><Team/>  </>
  //   }
  // ])
  return (
    <div> 
      {/* <RouterProvider router={router}/> */}
      {/* <Navbar /> */}
      <Home/>
    </div>
  )
}

export default App