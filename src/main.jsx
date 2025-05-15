import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Components/Header.jsx'
import Calenderview from './Dashbaord/Calenderview.jsx'
import Listing from './Dashbaord/Listing.jsx'
import Inbox from './Dashbaord/Inbox.jsx'
import Reviews from './Dashbaord/Reviews.jsx'
import Siderbar from './Dashbaord/Siderbar.jsx'
import Hallhistory from './Dashbaord/Hallhistory.Jsx'
import Packages from './Dashbaord/Packages.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Header />
        
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-3'>
            <Siderbar />
          </div>
          <div className='col-lg-9 col-md-9'>

          <App />
          </div>
        </div>
      </div>
      </div>
  },
  {
    path: "/analytics",
    element:
      <div>
        <Header />
        
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-3'>
            <Siderbar />
          </div>
          <div className='col-lg-9 col-md-9'>

          <App />
          </div>
        </div>
      </div>
      </div>
  },
  {
    path: "/calendarview",
    element:
      <div>
        <Header />
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-3'>
            <Siderbar />
          </div>
          <div className='col-lg-9 col-md-9'>

          <Calenderview />
          </div>
        </div>
      </div>
      </div>
  },
  {
    path: "/listings",
    element:
      <div>
      <Header />
      <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-3'>
            <Siderbar />
          </div>
          <div className='col-lg-9 col-md-9'>

            <Listing />
          </div>
        </div>
      </div>
    </div>
  },
    
  {
    path: "/messages",
    element:
      <div>
        <Header />
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-3'>
            <Siderbar />
          </div>
          <div className='col-lg-9 col-md-9'>

            <Inbox />
          </div>
        </div>
      </div>
      </div>
  },
  {
    path: "/reviews",
    element:
      <div>
        <Header />
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-3'>
              <Siderbar />
            </div>
            <div className='col-lg-9 col-md-9'>

              <Reviews />
            </div>
          </div>
        </div>
      </div>
  },
  {
    path: "/history",
    element:
      <div>
        <Header />
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-3'>
              <Siderbar />
            </div>
            <div className='col-lg-9 col-md-9'>

              <Hallhistory />
            </div>
          </div>
        </div>
      </div>
  },
  {
    path: "/Packages",
    element:
      <div>
        <Header />
        <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-3'>
              <Siderbar />
            </div>
            <div className='col-lg-9 col-md-9'>

              <Packages />
            </div>
          </div>
        </div>
      </div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
