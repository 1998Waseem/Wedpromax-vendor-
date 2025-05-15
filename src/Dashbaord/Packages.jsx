import React,{useState} from 'react'
import { Calendar } from "lucide-react"
import { FaCircleCheck } from "react-icons/fa6";

const Packages = () => {
    const [billingCycle, setBillingCycle] = useState("monthly")
  const [activeKey, setActiveKey] = useState("0")

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  const packages = [
    {
      id: "0",
      name: "Basic Package",
      price: "PKR 85,000",
      menu: [
        { item: "Cuisine", details: "Biryani, Biryani" },
        { item: "Drinks", details: "Biryani, Biryani" },
        { item: "Dessert", details: "Biryani, Biryani" },
      ],
      amenities: ["Photography", "Music", "Decoration"],
    },
    {
      id: "1",
      name: "Standard Package",
      price: "PKR 85,000",
      menu: [
        { item: "Cuisine", details: "Biryani, Biryani, Biryani" },
        { item: "Drinks", details: "Biryani, Biryani, Biryani" },
        { item: "Dessert", details: "Biryani, Biryani, Biryani" },
      ],
      amenities: ["Photography", "Music", "Decoration", "Venue Setup"],
    },
    {
      id: "2",
      name: "Premium Package",
      price: "PKR 85,000",
      menu: [
        { item: "Cuisine", details: "Biryani, Biryani, Biryani, Biryani" },
        { item: "Drinks", details: "Biryani, Biryani, Biryani, Biryani" },
        { item: "Dessert", details: "Biryani, Biryani, Biryani, Biryani" },
      ],
      amenities: ["Photography", "Music", "Decoration", "Venue Setup", "Event Coordination"],
    },
  ]
    return (
        <>
            <div className="card rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                <div className="container py-5 bg-light rounded-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="fw-bold mb-4 text-center">Our Pricing Plans</h2>

          <h3 className="text-center text-primary mb-4">Choose Your Plan</h3>

          {/* Billing toggle */}
          <div className="d-flex justify-content-center mb-5">
            <div className="btn-group" role="group" aria-label="Billing cycle">
              <button
                type="button"
                className={`btn ${billingCycle === "monthly" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`btn ${billingCycle === "yearly" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly (Save 2.5%)
              </button>
            </div>
          </div>

          {/* Packages accordion */}
          <div className="accordion shadow-sm rounded-3 bg-white" id="pricingAccordion">
            {packages.map((pkg, index) => (
              <div className="accordion-item border-0 mb-2" key={pkg.id}>
                <h2 className="accordion-header" id={`heading${pkg.id}`}>
                  <button
                    className={`accordion-button ${activeKey !== pkg.id ? "collapsed" : ""} py-3`}
                    type="button"
                    onClick={() => toggleAccordion(pkg.id)}
                    aria-expanded={activeKey === pkg.id}
                    aria-controls={`collapse${pkg.id}`}
                  >
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary p-2 rounded me-3 text-white">
                          <Calendar size={24} />
                        </div>
                        <span className="fw-bold">{pkg.name}</span>
                      </div>
                      <span className="fw-bold">{pkg.price}</span>
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapse${pkg.id}`}
                  className={`accordion-collapse collapse ${activeKey === pkg.id ? "show" : ""}`}
                  aria-labelledby={`heading${pkg.id}`}
                >
                  <div className="accordion-body p-4">
                    <h5 className="mb-4">What's included</h5>

                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="mb-3">Menu:</h6>
                        <ul className="list-unstyled">
                          {pkg.menu.map((menuItem, i) => (
                            <li key={i} className="mb-3 d-flex align-items-start">
                              <FaCircleCheck style={{color:"#0D6EFD"}}/>&nbsp;
                              <div>
                                <strong>{menuItem.item}:</strong> {menuItem.details}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <h6 className="mb-3">Amenities:</h6>
                        <ul className="list-unstyled">
                          {pkg.amenities.map((amenity, i) => (
                            <li key={i} className="mb-3 d-flex align-items-start">
                              
                                <FaCircleCheck style={{color:"#0D6EFD"}}/>&nbsp;
                              
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
