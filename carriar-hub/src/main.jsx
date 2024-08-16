import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Statistics from "./Statistics.jsx";
import Blog from "./Blog.jsx";
import Job from "../../Job.jsx";
import JobDetail from "./Component/JobDetail.jsx";
import JobApplication from "./Component/JobApplication.jsx";


const router= createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Statistics></Statistics>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/application",
        loader: () => fetch("jobs.json"),
        element:<JobApplication></JobApplication>
      },
        
      {
        path: `/job/:jobId`, 
        element: <JobDetail></JobDetail>,
        loader: () => fetch(`../jobs.json`),
      }

    ]
    
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  
  </React.StrictMode>
)
