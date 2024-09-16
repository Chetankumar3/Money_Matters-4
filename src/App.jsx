import React, { useState, useEffect } from 'react';
import Home from './Home/Home.jsx'
import Loading from './Home/Loading.jsx'
// import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demo purposes

    return () => clearTimeout(timer);
  }, []);
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
      {loading ? <Loading /> : <Home/>}
    </div>
  )
}

export default App