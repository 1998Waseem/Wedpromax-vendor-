// import React from 'react'
// import { Hexagon, User, Calendar, MessageSquare, Star, ChevronRight } from 'lucide-react'
// import './Siderbar.css'
// const Siderbar = () => {
//   return (
//     <>
//    <div className="d-flex align-items-center mb-5">
//             <Hexagon className="me-2" />
//             <h5 className="mb-0 fw-bold">Dashboard</h5>
//           </div>

//           <div className="nav flex-column">
//             <div className="nav-item mb-3">
//               <a
//                 href="#"
//                 className="nav-link d-flex align-items-center justify-content-between text-white bg-primary rounded-pill py-2 px-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <Hexagon size={20} className="me-2" />
//                   <span>Analytics</span>
//                 </div>
//                 <ChevronRight size={16} />
//               </a>
//             </div>

//             <div className="nav-item mb-3">
//               <a
//                 href="#"
//                 className="nav-link d-flex align-items-center justify-content-between text-secondary py-2 px-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <User size={20} className="me-2" />
//                   <span>My Listings</span>
//                 </div>
//                 <ChevronRight size={16} />
//               </a>
//             </div>

//             <div className="nav-item mb-3">
//               <a
//                 href="#"
//                 className="nav-link d-flex align-items-center justify-content-between text-secondary py-2 px-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <Calendar size={20} className="me-2" />
//                   <span>Calendar View</span>
//                 </div>
//                 <ChevronRight size={16} />
//               </a>
//             </div>

//             <div className="nav-item mb-3">
//               <a
//                 href="#"
//                 className="nav-link d-flex align-items-center justify-content-between text-secondary py-2 px-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <MessageSquare size={20} className="me-2" />
//                   <span>Messages</span>
//                 </div>
//                 <ChevronRight size={16} />
//               </a>
//             </div>

//             <div className="nav-item mb-3">
//               <a
//                 href="#"
//                 className="nav-link d-flex align-items-center justify-content-between text-secondary py-2 px-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <Star size={20} className="me-2" />
//                   <span>Reviews</span>
//                 </div>
//                 <ChevronRight size={16} />
//               </a>
//             </div>
//           </div>
//     </>
//   )
// }

// export default Siderbar

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hexagon, User, Calendar, MessageSquare, Star, ChevronRight } from 'lucide-react';
import './Siderbar.css';

const menuItems = [
  { label: 'Analytics', icon: Hexagon, path: '/analytics' },
  { label: 'My Listings', icon: User, path: '/listings' },
  { label: 'Calendar View', icon: Calendar, path: '/calendarview' },
  { label: 'Messages', icon: MessageSquare, path: '/messages' },
  { label: 'Reviews', icon: Star, path: '/reviews' },
];

const Siderbar = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <Hexagon className="me-2" />
        <h5 className="mb-0 fw-bold">Dashboard</h5>
      </div>

      <div className="nav flex-column">
        {menuItems.map(({ label, icon: Icon, path }, index) => (
          <div className="nav-item mb-3" key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center justify-content-between py-2 px-3 rounded-pill ${
                  isActive ? 'bg-primary text-white' : 'text-secondary'
                }`
              }
            >
              <div className="d-flex align-items-center">
                <Icon size={20} className="me-2" />
                <span>{label}</span>
              </div>
              <ChevronRight size={16} />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Siderbar;

