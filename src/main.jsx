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
const router = createBrowserRouter([
  {
  path: "/",
  element:
    <div>
      <Header />
      <App />  
    </div>
},
{
  path:"/analytics",
  element:
  <div>
    <Header />
    <App />
  </div>
},
{
  path:"/calendarview",
  element:
  <div>
    <Header />
    <Calenderview />
  </div>
},
{
  path:"/listings",
  element:
  <div>
    <Header />
    <Listing />
  </div>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
