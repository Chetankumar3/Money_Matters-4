import React from 'react'
import Home from './Home/Home.jsx'
// import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/Gallery",
  //     element:<><Navbar /><Gallery/></>
  //   },
  //   {
  //     path:"/",
  //     element:<><Home/></>
  //   },
  //   {
  //     path:"/About",
  //     element:<><Navbar /><About/></>
  //   },
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
      <Home/>
    </div>
  )
}

export default App