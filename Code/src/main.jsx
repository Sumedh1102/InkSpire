import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import Page1 from '../src/BlogContent/Page1.jsx'
import Page2 from '../src/BlogContent/Page2.jsx'
import Page3 from '../src/BlogContent/Page3.jsx'
import Page4 from '../src/BlogContent/Page4.jsx'



import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
       path : "/",
       element : < Home />,
      },
      {
      path : "/blogs",
      element : < Blogs />
      },
      {
      path : "/services",
      element : < Services />
      },
      {
      path : "/contact",
      element : < Contact />
      },
      {
        path:"/blogs/:blogTitle",
        element:<BlogDetails />
      },
      {
        path:"/blogs1",
        element:<Page1 />
      },
      {
        path:"/blogs2",
        element: <Page2 />
      },
      {
        path:"/blogs3",
        element: <Page3 />
      },
      {
        path:"/blogs4",
        element: <Page4 />
      },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
