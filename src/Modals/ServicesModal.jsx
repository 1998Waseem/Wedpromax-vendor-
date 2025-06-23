

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ReactSlider from 'react-slider';
import { FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import './Services.css'
const serviceData = [
    {
        "Service Name": "Catering Services",
        Filters: [
            {
                "Filter Name": "Per Head Price",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 500 – Rs. 3,000+",
            },
            {
                "Filter Name": "Cuisine Type",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Pakistani", "Chinese", "Continental", "BBQ", "Desi", "Fusion"],
            },
            {
                "Filter Name": "Service Style",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["Buffet", "Plated", "Table Service", "Live Counters", "Self-Service"],
            },
            {
                "Filter Name": "Minimum Order Capacity",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["50+", "100+", "200+", "300+", "500+ guests"],
            },
            {
                "Filter Name": "Add-ons Available",
                "Filter Input Type": "Checkbox List",
                "Filter Options": ["Waiters", "Crockery", "Live BBQ", "Drinks", "Desserts"],
            },
        ],
    },
    {
        "Service Name": "Photographers & Videographers",
        Filters: [
            {
                "Filter Name": "Service Type",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Photography Only", "Videography Only", "Drone", "Full Package"],
            },
            {
                "Filter Name": "Price Range",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 20,000 – Rs. 200,000+",
            },
            {
                "Filter Name": "Delivery Timeframe",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["1 week", "2 weeks", "4 weeks", "6+ weeks"],
            },
            {
                "Filter Name": "Coverage Hours",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["2 Hours", "Half Day", "Full Day", "Multi-day"],
            },
            {
                "Filter Name": "Style of Photography",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Candid", "Traditional", "Cinematic", "Portrait", "Journalistic"],
            },
        ],
    },
    {
        "Service Name": "Makeup Studios",
        Filters: [
            {
                "Filter Name": "Makeup Type",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Bridal", "Party", "Mehndi", "Walima", "Groom Makeup"],
            },
            {
                "Filter Name": "Price Range",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 10,000 – Rs. 100,000+",
            },
            {
                "Filter Name": "In-Studio or On-Site",
                "Filter Input Type": "Radio Buttons",
                "Filter Options": ["In-Salon", "Home Visit", "Venue-based"],
            },
            {
                "Filter Name": "Package Inclusions",
                "Filter Input Type": "Checkbox List",
                "Filter Options": ["Hair Styling", "Lashes", "Dupatta Setting", "Trial Included"],
            },
            {
                "Filter Name": "Brands Used",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["MAC", "Huda Beauty", "Tarte", "Dior", "Kryolan", "Local Brands"],
            },
        ],
    },
    {
        "Service Name": "Dress Designers",
        Filters: [
            {
                "Filter Name": "Outfit Type",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Bridal Dress", "Mehndi Dress", "Groom Sherwani", "Party Wear"],
            },
            {
                "Filter Name": "Price Range",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 30,000 – Rs. 500,000+",
            },
            {
                "Filter Name": "Customization",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["Fully Custom", "Semi-Custom", "Ready-to-Wear"],
            },
            {
                "Filter Name": "Delivery Time",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["1 Week", "2 Weeks", "1 Month", "3 Months"],
            },
            {
                "Filter Name": "Design Aesthetic",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Traditional", "Modern", "Minimalist", "Fusion", "Heavy Work"],
            },
        ],
    },
    {
        "Service Name": "Event Managers / Decorators",
        Filters: [
            {
                "Filter Name": "Event Type",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Barat", "Mehndi", "Walima", "Engagement", "Nikkah"],
            },
            {
                "Filter Name": "Service Scope",
                "Filter Input Type": "Checkbox List",
                "Filter Options": ["Full Event Management", "Only Decor", "Stage Only", "Entry Setup"],
            },
            {
                "Filter Name": "Budget Range",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 50,000 – Rs. 1,000,000+",
            },
            {
                "Filter Name": "Theme/Style",
                "Filter Input Type": "Multi-select",
                "Filter Options": ["Floral", "Royal", "Rustic", "Minimal", "Cultural"],
            },
            {
                "Filter Name": "Included Services",
                "Filter Input Type": "Checkbox List",
                "Filter Options": ["Sound", "Lighting", "Backdrops", "Centerpieces", "Dance Floor"],
            },
        ],
    },
    {
        "Service Name": "Marriage Halls",
        Filters: [
            {
                "Filter Name": "Price Range",
                "Filter Input Type": "Range Slider",
                "Filter Options": "Rs. 50,000 – Rs. 1,000,000+",
            },
            {
                "Filter Name": "Capacity",
                "Filter Input Type": "Dropdown",
                "Filter Options": ["Up to 100", "100-300", "300-500", "500+"],
            },
            {
                "Filter Name": "Location",
                "Filter Input Type": "Search/Dropdown",
                "Filter Options": "City-wise, Area-wise",
            },
            {
                "Filter Name": "Menu Options",
                "Filter Input Type": "Checkbox List",
                "Filter Options": ["1 Dish", "2 Dishes", "3+ Dishes", "Custom Menu"],
            },
            {
                "Filter Name": "Car Parking",
                "Filter Input Type": "Radio Buttons",
                "Filter Options": ["Available", "Not Available"],
            },
        ],
    },
]

export default function ServicesModal({ show, onHide }) {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        serviceName: "",
        description: "",
        location: "",
        contactInfo: "",
        profileInfo: "",
        fbLink: "",
        whatsappLink: "",
        instaLink: "",
        city: "",
        country: "",
        province: "",
        bookingSlot: "",
        serviceFrom: "",
        serviceTo: "",
        filters: {},
    })
    const [errors, setErrors] = useState({})

    const validateStep1 = () => {
        const newErrors = {}

        if (!formData.serviceName) newErrors.serviceName = "Service Name is required"
        if (!formData.description) newErrors.description = "Description is required"
        if (!formData.location) newErrors.location = "Location is required"
        if (!formData.contactInfo) newErrors.contactInfo = "Contact Info is required"
        if (!formData.profileInfo) newErrors.profileInfo = "Profile Info is required"
        if (!formData.fbLink) newErrors.fbLink = "Facebook Link is required"
        if (!formData.whatsappLink) newErrors.whatsappLink = "WhatsApp Link is required"
        if (!formData.instaLink) newErrors.instaLink = "Instagram Link is required"
        if (!formData.city) newErrors.city = "City is required"
        if (!formData.country) newErrors.country = "Country is required"
        if (!formData.province) newErrors.province = "Province is required"
        if (!formData.bookingSlot) newErrors.bookingSlot = "Booking Slot is required"
        if (!formData.serviceFrom) newErrors.serviceFrom = "Service From is required"
        if (!formData.serviceTo) newErrors.serviceTo = "Service To is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }))
        }
    }

    const handleFilterChange = (filterName, value) => {
        setFormData((prev) => ({
            ...prev,
            filters: {
                ...prev.filters,
                [filterName]: value,
            },
        }))
    }

    const handleNext = () => {
        if (validateStep1()) {
            setCurrentStep(2)
        }
    }

    const handleSubmit = () => {
        console.log("Form submitted:", formData)
        alert("Service registered successfully!")
        onHide()
        setCurrentStep(1)
        setFormData({
            serviceName: "",
            description: "",
            location: "",
            contactInfo: "",
            profileInfo: "",
            fbLink: "",
            whatsappLink: "",
            instaLink: "",
            city: "",
            country: "",
            province: "",
            bookingSlot: "",
            serviceFrom: "",
            serviceTo: "",
            filters: {},
        })
    }

    const selectedService = serviceData.find((service) => service["Service Name"] === formData.serviceName)

    const renderFilterInput = (filter) => {
        const filterName = filter["Filter Name"]
        const inputType = filter["Filter Input Type"]
        const options = filter["Filter Options"]

        switch (inputType) {
            case "Range Slider":
                return (
                    //   <div className="mb-3">
                    //     <label className="form-label">{filterName}</label>
                    //     <input
                    //       type="range"
                    //       className="form-range"
                    //       min="0"
                    //       max="100"
                    //       value={formData.filters[filterName] || 0}
                    //       onChange={(e) => handleFilterChange(filterName, e.target.value)}
                    //     />
                    //     <div className="form-text">{typeof options === "string" ? options : ""}</div>
                    //   </div>

                    // Your component code
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="slider-thumb"
                            trackClassName="slider-track"
                            min={options.min || 0}
                            max={options.max || 100}
                            value={formData.filters[filterName] || [options.min || 0, options.max || 100]}
                            onChange={(value) => handleFilterChange(filterName, value)}
                            pearling
                            minDistance={1}
                        />
                        <div className="form-text d-flex justify-content-between">
                            <span>{formData.filters[filterName]?.[0] || options.min || 0}</span>
                            <span>{formData.filters[filterName]?.[1] || options.max || 100}</span>
                        </div>
                    </div>
                )

            case "Multi-select":
                return (
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <select
                            className="form-select"
                            value={formData.filters[filterName] || []}
                            onChange={(e) => {
                                const values = Array.from(e.target.selectedOptions, (option) => option.value)
                                handleFilterChange(filterName, values)
                            }}
                        >
                            {Array.isArray(options) &&
                                options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </select>
                        <div className="form-text">Hold Ctrl/Cmd to select multiple options</div>
                    </div>
                )

            case "Dropdown":
            case "Search/Dropdown":
                return (
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <select
                            className="form-select"
                            value={formData.filters[filterName] || ""}
                            onChange={(e) => handleFilterChange(filterName, e.target.value)}
                        >
                            <option value="">Select {filterName}</option>
                            {Array.isArray(options) &&
                                options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </select>
                    </div>
                )

            case "Checkbox List":
                return (
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <div className="mt-2">
                            {Array.isArray(options) &&
                                options.map((option, index) => (
                                    <div key={index} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`${filterName}-${index}`}
                                            checked={(formData.filters[filterName] || []).includes(option)}
                                            onChange={(e) => {
                                                const currentValues = formData.filters[filterName] || []
                                                if (e.target.checked) {
                                                    handleFilterChange(filterName, [...currentValues, option])
                                                } else {
                                                    handleFilterChange(
                                                        filterName,
                                                        currentValues.filter((v) => v !== option),
                                                    )
                                                }
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`${filterName}-${index}`}>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>
                )

            case "Radio Buttons":
                return (
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <div className="mt-2">
                            {Array.isArray(options) &&
                                options.map((option, index) => (
                                    <div key={index} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={filterName}
                                            id={`${filterName}-${index}`}
                                            value={option}
                                            checked={formData.filters[filterName] === option}
                                            onChange={(e) => handleFilterChange(filterName, e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor={`${filterName}-${index}`}>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="mb-3">
                        <label className="form-label">{filterName}</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.filters[filterName] || ""}
                            onChange={(e) => handleFilterChange(filterName, e.target.value)}
                        />
                    </div>
                )
        }
    }

    if (!show) return null

    return (
        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "500px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {currentStep === 1
                                ? "Service Registration - Basic Info"
                                : `Service Registration - ${formData.serviceName} Details`}
                        </h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>

                    <div className="modal-body">
                        {/* Progress Bar */}
                        <div className="progress mb-4" style={{ height: "4px" }}>
                            <div className="progress-bar" style={{ width: `${(currentStep / 2) * 100}%` }}></div>
                        </div>

                        {currentStep === 1 && (
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"><MdDesignServices style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/> Service Name *</label>
                                            <select
                                                className={`form-select ${errors.serviceName ? "is-invalid" : ""}`}
                                                value={formData.serviceName}
                                                onChange={(e) => handleInputChange("serviceName", e.target.value)}
                                            >
                                                <option value="">Select Service</option>
                                                {serviceData.map((service, index) => (
                                                    <option key={index} value={service["Service Name"]}>
                                                        {service["Service Name"]}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.serviceName && <div className="invalid-feedback">{errors.serviceName}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"><MdLocalPhone style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Contact Info *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.contactInfo ? "is-invalid" : ""}`}
                                                value={formData.contactInfo}
                                                onChange={(e) => handleInputChange("contactInfo", e.target.value)}
                                                
                                            />
                                            {errors.contactInfo && <div className="invalid-feedback">{errors.contactInfo}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineDescription style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/> Description *</label>
                                    <textarea
                                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => handleInputChange("description", e.target.value)}
                                        
                                    />
                                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"> <IoLocation style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Google Map Link *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.location ? "is-invalid" : ""}`}
                                                value={formData.location}
                                                onChange={(e) => handleInputChange("location", e.target.value)}
                                               
                                            />
                                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"><IoPerson style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/> Profile Info *</label>
                                            <input
                                                type="file"
                                                className={`form-control ${errors.profileInfo ? "is-invalid" : ""}`}
                                                value={formData.profileInfo}
                                                onChange={(e) => handleInputChange("profileInfo", e.target.value)}
                                               
                                            />
                                            {errors.profileInfo && <div className="invalid-feedback">{errors.profileInfo}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label"><FaFacebook style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Facebook Link *</label>
                                            <input
                                                type="url"
                                                className={`form-control ${errors.fbLink ? "is-invalid" : ""}`}
                                                value={formData.fbLink}
                                                onChange={(e) => handleInputChange("fbLink", e.target.value)}
                                               
                                            />
                                            {errors.fbLink && <div className="invalid-feedback">{errors.fbLink}</div>}
                                        </div>
                                    </div>

                                   
                                   
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label"><FaSquareWhatsapp style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/> WhatsApp Link *</label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.whatsappLink ? "is-invalid" : ""}`}
                                                    value={formData.whatsappLink}
                                                    onChange={(e) => handleInputChange("whatsappLink", e.target.value)}
                                                   
                                                />
                                                {errors.whatsappLink && <div className="invalid-feedback">{errors.whatsappLink}</div>}
                                            </div>
                                        </div>
                                   

                                   
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label"><FaSquareInstagram style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/> Instagram Link *</label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.instaLink ? "is-invalid" : ""}`}
                                                    value={formData.instaLink}
                                                    onChange={(e) => handleInputChange("instaLink", e.target.value)}
                                                   
                                                />
                                                {errors.instaLink && <div className="invalid-feedback">{errors.instaLink}</div>}
                                            </div>
                                        </div>

                                   

                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaCity style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>City *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                                value={formData.city}
                                                onChange={(e) => handleInputChange("city", e.target.value)}
                                                
                                            />
                                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaCity style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Country *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.country ? "is-invalid" : ""}`}
                                                value={formData.country}
                                                onChange={(e) => handleInputChange("country", e.target.value)}
                                               
                                            />
                                            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaCity style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Province *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.province ? "is-invalid" : ""}`}
                                                value={formData.province}
                                                onChange={(e) => handleInputChange("province", e.target.value)}
                                               
                                            />
                                            {errors.province && <div className="invalid-feedback">{errors.province}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaBookmark style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Booking Slot *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.bookingSlot ? "is-invalid" : ""}`}
                                                value={formData.bookingSlot}
                                                onChange={(e) => handleInputChange("bookingSlot", e.target.value)}
                                               
                                            />
                                            {errors.bookingSlot && <div className="invalid-feedback">{errors.bookingSlot}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaClock style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Service From *</label>
                                            <input
                                                type="time"
                                                className={`form-control ${errors.serviceFrom ? "is-invalid" : ""}`}
                                                value={formData.serviceFrom}
                                                onChange={(e) => handleInputChange("serviceFrom", e.target.value)}
                                                placeholder="e.g., 9 AM"
                                            />
                                            {errors.serviceFrom && <div className="invalid-feedback">{errors.serviceFrom}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label"><FaClock style={{color:"#E3A400",fontSize:"18px",marginRight:"10px"}}/>Service To *</label>
                                            <input
                                                type="time"
                                                className={`form-control ${errors.serviceTo ? "is-invalid" : ""}`}
                                                value={formData.serviceTo}
                                                onChange={(e) => handleInputChange("serviceTo", e.target.value)}
                                                placeholder="e.g., 11 AM"
                                            />
                                            {errors.serviceTo && <div className="invalid-feedback">{errors.serviceTo}</div>}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {currentStep === 2 && selectedService && (
                            <div>
                                <div className="alert alert-info mb-4">
                                    <strong>Service:</strong> {formData.serviceName}
                                    <br />
                                    <small>Please fill in the specific details for your service</small>
                                </div>

                                <form>
                                    {selectedService.Filters.map((filter, index) => (
                                        <div key={index}>{renderFilterInput(filter)}</div>
                                    ))}
                                </form>
                            </div>
                        )}
                    </div>

                    <div className="modal-footer">
                        {currentStep === 2 && (
                            <button type="button" className="btn btn-secondary me-auto" onClick={() => setCurrentStep(1)}>
                                <ChevronLeft className="me-1" size={16} />
                                Back
                            </button>
                        )}

                        {/* <button type="button" className="btn btn-secondary" onClick={onHide}>
                            Cancel
                        </button> */}

                        {currentStep === 1 ? (
                            <center>
                             <button type="button" className="btn btn-primary" onClick={handleNext}>
                                Next
                                <ChevronRight className="ms-1" size={16} />
                            </button>
                            </center>
                            
                        ) : (
                            <button type="button" className="btn btn-success" onClick={handleSubmit}>
                                Register Service
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}