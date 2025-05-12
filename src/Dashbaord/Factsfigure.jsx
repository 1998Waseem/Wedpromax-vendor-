
import { useState } from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import CountUp from "react-countup"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import Siderbar from "./Siderbar"
import "./Facts.css"
import downwordicon from "../assets/icons/downword.svg"
import upwordicon from "../assets/icons/upword.svg"
export default function Factsfigure() {
  const [activeTab, setActiveTab] = useState("stats")

  // Sample data for the line chart
  const lineData = [
    { name: "Jan", views: 5000, hits: 4000 },
    { name: "Feb", views: 7000, hits: 3000 },
    { name: "Mar", views: 9000, hits: 7000 },
    { name: "Apr", views: 12000, hits: 5000 },
    { name: "May", views: 16000, hits: 9000 },
    { name: "Jun", views: 14000, hits: 13000 },
    { name: "Jul", views: 15000, hits: 11000 },
  ]

  // Sample data for the bar chart
  const barData = [
    { day: "M", value: 200 },
    { day: "T", value: 300 },
    { day: "W", value: 150 },
    { day: "Th", value: 220 },
    { day: "F", value: 250 },
    { day: "S", value: 80 },
  ]

  // Sample notifications
  const notifications = [
    { id: 1, icon: "🔔", title: "New Booking.", time: "Just now" },
    { id: 2, icon: "👤", title: "New user registered.", time: "59 minutes ago" },
    { id: 3, icon: "👁️", title: "Someone viewed your profile", time: "12 hours ago" },
    { id: 4, icon: "📣", title: "Andi Lane starting Follow you.", time: "Today, 11:59 AM" },
  ]

  const leaderboard = [
    {
      id: 1,
      "rank": "1",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 2,
      "rank": "2",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 3,
      "rank": "3",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 4,
      "rank": "4",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 5,
      "rank": "5",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 6,
      "rank": "6",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 7,
      "rank": "7",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 8,
      "rank": "8",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 9,
      "rank": "9",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },

    {
      id: 10,
      "rank": "10",
      "hallname": "Main Hall",
      "views": "123",
      "hits": "200",
      "bookings": "50",
      "profit": "25%",

    },
  ]

  return (
    <div className="container bg-light min-vh-100 p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-4 col-lg-3 bg-white shadow-sm rounded-end-4 p-4 d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <Siderbar />
        </div>

        {/* Main Content */}
        <div className="col-md-8 col-lg-9 p-4">
          <div className="bg-white rounded-4 p-4 shadow-sm">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex">
                <button
                  className={`btn ${activeTab === "stats" ? "btn-dark" : "btn-light"} me-2`}
                  onClick={() => setActiveTab("stats")}
                >
                  Stats By Hall
                </button>
                <button
                  className={`btn ${activeTab === "leaderboard" ? "btn-dark" : "btn-light"}`}
                  onClick={() => setActiveTab("leaderboard")}
                >
                  Leaderboard
                </button>


              </div>

              <div className="dropdown">
                <select className="form-select" aria-label="Default select example">
                  <option selected>6 Months</option>
                  <option value="24">1 year</option>
                  <option value="48">2years</option>

                </select>
              </div>

            </div>

            

            {
              activeTab === "stats" && (<>
              <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Hotel Taj</option>
                  <option value="hr">Hotel Royal</option>
                  <option value="hg">Hotel Grand</option>

                </select>
                <button style={{ display: "none" }}
                  className={`btn ${activeTab === "leaderboard" ? "btn-dark" : "btn-light"}`}
                  onClick={() => setActiveTab("leaderboard")}
                >
                  Leaderboard
                </button>
              </div>

              <div className="d-flex align-items-center">
                <div className="dropdown me-3">
                  <button style={{ display: "none" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="hotelDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hotel Taj
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="hotelDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Hotel Taj
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hotel Royal
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hotel Grand
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button style={{ display: "none" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="timeDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    6 months
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="timeDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        3 months
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        6 months
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        1 year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                {/* Stats Cards */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="bg-light rounded-4 p-3 statscol" style={{ background: "#E6F1FD !important" }}>
                      <div className="text-secondary mb-2 countertext">Views</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="mb-0 fw-bold ">
                          <CountUp end={7265} duration={2.5} separator="," className="counternumber" />
                        </h2>
                        <div className="d-flex align-items-center text-dark">
                          {/* <ArrowUpRight size={16} /> */}
                          <span>+11.01%</span>
                          <img src={upwordicon} alt="upwordicon" className='upwordicon' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="bg-light rounded-4 p-3 statscol" style={{ backgroundColor: "#E6F1FD !important" }}>
                      <div className="text-secondary mb-2 countertext">Hits</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="mb-0 fw-bold">
                          <CountUp end={3671} duration={2.5} separator="," className="counternumber" />
                        </h2>
                        <div className="d-flex align-items-center text-dark">
                          {/* <ArrowDownRight size={16} /> */}
                          <span>-0.03%</span>
                          <img src={downwordicon} alt="downwordicon" className='downwordicon' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="bg-light rounded-4 p-3 statscol" style={{ backgroundColor: "#E6F1FD !important" }}>
                      <div className="text-secondary mb-2 countertext">Total Profit</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="mb-0 fw-bold">
                          <CountUp end={156} duration={2.5} separator="," className="counternumber" />
                        </h2>
                        <div className="d-flex align-items-center text-dark">
                          <span>+15.03%</span>
                          {/* <ArrowUpRight size={16} /> */}
                          <img src={downwordicon} alt="downwordicon" className='downwordicon' />

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="bg-light rounded-4 p-3 statscol" style={{ backgroundColor: "#E6F1FD !important" }}>
                      <div className="text-secondary mb-2 countertext">Total Bookings</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="mb-0 fw-bold">
                          <CountUp end={2318} duration={2.5} separator="," className="counternumber" />
                        </h2>
                        <div className="d-flex align-items-center text-dark">
                          {/* <ArrowUpRight size={16} /> */}
                          <span>+6.08%</span>
                          <img src={upwordicon} alt="upwordicon" className='upwordicon' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line Chart */}
                <div className="bg-white rounded-4 p-3 mb-4">
                  <div style={{ height: "300px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} domain={[0, 30000]} ticks={[0, 10000, 20000, 30000]} />
                        <Line
                          type="monotone"
                          dataKey="views"
                          stroke="#000"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="hits"
                          stroke="#ccc"
                          strokeDasharray="5 5"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bottom Cards */}
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                      <h5 className="mb-4">Traffics Analysis</h5>
                      <div style={{ height: "250px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                            <Bar dataKey="value" fill="#4285F4" radius={[10, 10, 0, 0]} barSize={30} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                      <h5 className="mb-4">Notifications</h5>
                      <div className="d-flex flex-column gap-3">
                        {notifications.map((notification) => (
                          <div key={notification.id} className="d-flex align-items-start">
                            <div
                              className="bg-light rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                              style={{ width: "40px", height: "40px" }}
                            >
                              <span>{notification.icon}</span>
                            </div>
                            <div>
                              <div className="fw-medium">{notification.title}</div>
                              <div className="text-secondary small">{notification.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </>)
            }

            {
              activeTab === "leaderboard" && (<>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Rank</th>
                      <th scope="col">Hall</th>
                      <th scope="col">Views</th>
                      <th scope="col">Hits</th>
                      <th scope="col">Bookings</th>
                      <th scope="col">Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      leaderboard.map((item) => (
                        <tr scope="row" key={item.id}>
                          <td className="p-4">{item.rank}</td>
                          <td className="p-4">{item.hallname}</td>
                          <td className="p-4">{item.views}</td>
                          <td className="p-4">{item.hits}</td>
                          <td className="p-4">{item.bookings}</td>
                          <td className="p-4">{item.profit}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </>)
            }


          </div>
        </div>
      </div>
    </div>
  )
}
