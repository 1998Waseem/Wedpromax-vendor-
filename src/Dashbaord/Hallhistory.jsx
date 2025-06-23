import React from 'react'
import { IoIosSearch } from "react-icons/io";
import './Hallhistory.css'

const Hallhistory = () => {
    const bookings = [
        {
          id: 1,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Confirmed",
        },
        {
          id: 2,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 3,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 4,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 5,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 6,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 7,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
        {
          id: 8,
          customer: "Ali Raza",
          eventDate: "12/05/2025",
          eventTime: "10:30PM to 11:30PM",
          bookingDate: "12/05/2025",
          hallName: "Hotel Taj",
          package: "Basic",
          amount: "PKR 40,000",
          status: "Pending",
        },
      ]
      
    return (
        <>
            <div className="card rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h5>Hall Order History</h5>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'></div>
                                <div className='col-md-6 d-flex'>
                                    <div className="d-flex gap-3">
                                        <div className="position-relative">
                                            <input
                                                type="text"
                                                className="form-control ps-4"
                                                placeholder="Search..."
                                                style={{ minWidth: "250px", borderRadius: "20px" }}
                                            />
                                            <IoIosSearch
                                                className="position-absolute text-secondary"
                                                style={{ top: "10px", left: "10px" }}
                                                size={18}
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-light dropdown-toggle d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                <span className="me-2">Sort by: Newest</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
              <table className="table mt-3 custom-table-bg">
                <thead>
                  <tr className="" style={{background:"#F5F5F5"}}>
                    <th style={{background:"#F5F5F5"}}>Sr No.</th>
                    <th style={{background:"#F5F5F5"}}>Customer</th>
                    <th style={{background:"#F5F5F5"}}>Event Date and Time</th>
                    <th style={{background:"#F5F5F5"}}>Booking Date</th>
                    <th style={{background:"#F5F5F5"}}>Hall Name</th>
                    <th style={{background:"#F5F5F5"}}>Package</th>
                    <th style={{background:"#F5F5F5"}}>Total Amount</th>
                    <th style={{background:"#F5F5F5"}}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td style={{background:"#F5F5F5"}}>{booking.id}</td>
                      <td style={{background:"#F5F5F5"}}>{booking.customer}</td>
                      <td style={{background:"#F5F5F5"}}>
                        {booking.eventDate}
                        <br />
                        <small className="text-secondary">{booking.eventTime}</small>
                      </td>
                      <td style={{background:"#F5F5F5"}}>{booking.bookingDate}</td>
                      <td style={{background:"#F5F5F5"}}>{booking.hallName}</td>
                      <td style={{background:"#F5F5F5"}}>{booking.package}</td>
                      <td style={{background:"#F5F5F5"}}>{booking.amount}</td>
                      <td style={{background:"#F5F5F5"}}>
                        <span
                          className={`badge ${booking.status === "Confirmed" ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"} px-3 py-2 rounded-pill`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="text-secondary">Showing data 1 to 8 of 256K entries</div>
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      40
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hallhistory
