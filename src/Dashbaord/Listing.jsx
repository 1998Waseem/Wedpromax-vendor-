import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Siderbar from './Siderbar';
import './Listing.css';
import listingimg from '../../src/assets/images/listingimg.svg'
import { FaTrashAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { BsBoxSeam } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbBuildingStore } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import axios from 'axios';
import { IoImageOutline } from "react-icons/io5";
import ToggleButton from 'react-toggle-button'
import MyHalls from '../Components/MyHalls';
import ServicesModal from '../Modals/ServicesModal';

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const Listing = () => {

  const [formMessage, setFormMessage] = useState()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    hallName: "",
    contactInfo: "",
    capacity: "",
    hallRentalPrice: "",
    hallProfilePicture: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2.jpg",
    facebookLink: "",
    instagramLink: "",
    whatsappLink: "",
    googleMapsLink: "",
    longitude: 10.97,
    latitude: 9.97,
    cityId: 1,
    provinceId: 1,
    countryId: 1,
    vendorId: 1,
    mediaLinks: [],
  })
  const [images, setImages] = useState(Array(6).fill(null))
  const [video, setVideo] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [cat, setCat] = useState('myhalls');
  const [value, setValue] = useState(false)
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [formStatus, setFormStatus]= useState(""); 
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false)

  // const [showaddhotelmodel, setShowAddhotelModel] = useState(false);
  const [pack, setPack] = useState('Basic');
  const [showaddpackagemodel, setShowAddpackageModel] = useState(false);
  const [menubuilder, setMenuBuilder] = useState('cuisine');
  
  
  //calling get categories api
  useEffect(() => {
    // Replace with your actual API URL
    axios.get(`${baseURL}/api/Vendor/GetallCategories`)
      .then((response) => {
        console.log("Categories and Menus response:", response.data); //Show full response in console
        setCategories(response.data.categories);      //Save categories to state
        setMenus(response.data.menus);  //save Menu to state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {}

    if (!formData.hallName.trim()) {
      newErrors.hallName = "Hall name is required"
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Contact info is required"
    } else if (!/^\+?[\d\s-()]+$/.test(formData.contactInfo)) {
      newErrors.contactInfo = "Please enter a valid contact number"
    }

    if (!formData.capacity || formData.capacity <= 0) {
      newErrors.capacity = "Capacity must be greater than 0"
    }

    if (!formData.hallRentalPrice || formData.hallRentalPrice <= 0) {
      newErrors.hallRentalPrice = "Price must be greater than 0"
    }

    if (!formData.googleMapsLink.trim()) {
      newErrors.googleMapsLink = "Google Map Link Required"
    }

    if (!formData.facebookLink.trim()) {
      newErrors.facebookLink = "Facebook Link Required"
    }

    if (!formData.instagramLink.trim()) {
      newErrors.instagramLink = "Instagram Link Required"
    }

    if (!formData.whatsappLink.trim()) {
      newErrors.whatsappLink = "Whatsapp Link Required"
    }



    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    const hasImages = images.some((img) => img !== null)

    if (!hasImages) {
      newErrors.images = "At least one image is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // const fileToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = (error) => reject(error)
  //   })
  // }

  // Handle image upload
 // Handle image upload
const handleImageUpload = (index, file) => {
  if (file && file.type.startsWith("image/")) {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);

    if (errors.images) {
      setErrors((prev) => ({
        ...prev,
        images: "",
      }));
    }
  }
};

// Handle video upload
const handleVideoUpload = (file) => {
  if (file && file.type.startsWith("video/")) {
    setVideo(file);
  }
};

// Handle drag and drop
const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e, index, isVideo = false) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (isVideo) {
    handleVideoUpload(file);
  } else {
    handleImageUpload(index, file);
  }
};

// Navigate to next step
const handleNext = () => {
  if (currentStep === 1 && validateStep1()) {
    setCurrentStep(2);
  } else if (currentStep === 2 && validateStep2()) {
    handleSubmit();
  }
};

// Submit form to API
const handleSubmit = async (e) => {
  e?.preventDefault();
  setFormMessage("");
  setFormStatus("");

  const isStep1Valid = validateStep1();
  const isStep2Valid = validateStep2();
  if (!isStep1Valid || !isStep2Valid) return;

  setLoading(true);

  try {
    const form = new FormData();

    // Append hall data
    form.append("hallName", formData.hallName);
    form.append("contactInfo", formData.contactInfo);
    form.append("capacity", Number(formData.capacity));
    form.append("hallRentalPrice", parseFloat(formData.hallRentalPrice));
    form.append("hallProfilePicture", formData.hallProfilePicture || "");
    form.append("facebookLink", formData.facebookLink || "");
    form.append("instagramLink", formData.instagramLink || "");
    form.append("whatsappLink", formData.whatsappLink || "");
    form.append("googleMapsLink", formData.googleMapsLink || "");
    form.append("longitude", parseFloat(formData.longitude));
    form.append("latitude", parseFloat(formData.latitude));
    form.append("cityId", Number(formData.cityId));
    form.append("provinceId", Number(formData.provinceId));
    form.append("countryId", Number(formData.countryId));
    form.append("vendorId", Number(formData.vendorId));

    // Append image files
    images.forEach((image, index) => {
      if (image) form.append("Images", image); // key must match your backend
    });

    // Append video file
    if (video) form.append("Video", video); // key must match your backend

    const response = await axios.post(`${baseURL}/api/Vendor/AddVendorHall`, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Vendor Hall added successfully:", response.data);
    setFormMessage("Hall added successfully!");
    setFormStatus("success");

    // Reset form
    setFormData({
      hallName: "",
      contactInfo: "",
      capacity: "",
      hallRentalPrice: "",
      hallProfilePicture: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2.jpg",
      facebookLink: "",
      instagramLink: "",
      whatsappLink: "",
      googleMapsLink: "",
      longitude: 10.97,
      latitude: 9.97,
      cityId: 1,
      provinceId: 1,
      countryId: 1,
      vendorId: 1,
      mediaLinks: [],
    });

    setImages([null, null, null, null, null, null]);
    setVideo(null);
    setErrors({});
  } catch (error) {
    const errMsg = error?.response?.data?.message || "Error submitting hall data.";
    setFormStatus("error");

    if (errMsg.toLowerCase().includes("hall already exists")) {
      setErrors({ hallName: "A hall with this name already exists." });
    } else if (errMsg.toLowerCase().includes("hall")) {
      setErrors({ hallName: errMsg });
    } else {
      setFormMessage(errMsg);
    }

    console.error("Submission error:", error);
  } finally {
    setLoading(false);
  }
};

  const modalRef = useRef(null);

  useEffect(() => {
    if (value && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();

      // Optional: Reset toggle after closing
      modalRef.current.addEventListener('hidden.bs.modal', () => {
        setValue(false);
      }, { once: true });
    }
  }, [value]);

  const cuisine = [
    { id: 1, dishname: "Biryani", price: "999" },
    { id: 2, dishname: "Biryani", price: "999" },
    { id: 3, dishname: "Biryani", price: "999" },
    { id: 4, dishname: "Biryani", price: "999" },
    { id: 5, dishname: "Biryani", price: "999" },
  ];

  const drinks = [
    { id: 1, drinkname: "Pepsi", price: "500" },
    { id: 2, drinkname: "Pepsi", price: "500" },
    { id: 3, drinkname: "Pepsi", price: "500" },
    { id: 4, drinkname: "Pepsi", price: "500" },
    { id: 5, drinkname: "Pepsi", price: "500" },
  ];

  const dessert = [
    { id: 1, dishname: "Kaheer", price: "700" },
    { id: 2, dishname: "Kaheer", price: "700" },
    { id: 3, dishname: "Kaheer", price: "700" },
    { id: 4, dishname: "Kaheer", price: "700" },
    { id: 5, dishname: "Kaheer", price: "700" },
  ];

  const aminites = [
    { id: 1, no1: "Car Parking", price: "999" },
    { id: 2, no1: "Bridal Room", price: "999" },
    { id: 3, no1: "Free WiFi", price: "999" },
    { id: 4, no1: "Air Condition", price: "999" },
    { id: 5, no1: "Stage Setup", price: "999" },
    { id: 6, no1: "Security Staff", price: "999" },
    { id: 7, no1: "Air Condition", price: "999" },
  ];


  return (
    <>
     <ServicesModal show={showModal} onHide={() => setShowModal(false)} />
    <div className="card rounded-4 shadow-sm h-100" style={{ background: "#F5F5F5" }}>
      <div className="card-body p-4">
        <div className='container'>
          <div className="row">
            <div className="col-md-12 col-lg-12 p-4">
              <div className='title'>
                <h4>My Listing</h4>
                {/* <button className='btn btn-primary addhallbtn' data-bs-toggle="modal" data-bs-target="#addHallModal">+ Add Hall</button> */}
                 <button className='btn btn-primary addhallbtn' onClick={() => setShowModal(true)}>+ Add Service</button>
              </div>
              <div className='listing-cat mt-2 d-flex flex-wrap gap-3'>
                <p className={`btn ${cat === "myhalls" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("myhalls")}>My Halls</p>
                <p className={`btn ${cat === "mymenu" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("mymenu")}>My Menu</p>
                <p className={`btn ${cat === "aminities" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("aminities")}>Amenities</p>
              </div>


              {cat === "myhalls" &&
                <MyHalls />
              }

              <div className="modal fade" ref={modalRef} tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">My Modal</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>This is a Bootstrap modal triggered by the toggle button.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {cat === "mymenu" && (
                <>
                  <div className='p-3 bg-white border rounded d-flex justify-content-between gap-3'>
                    <select className="form-select mb-3">
                      <option selected>Select Category</option>
                      {
                        categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))
                      }
                    </select>
                    <select className="form-select mb-3">
                      <option selected>Select Item</option>
                      {
                        menus.map((menu) => (
                          <option key={menu.id} value={menu.id}>{menu.name}</option>
                        ))
                      }
                    </select>
                    <input type="number" className="form-control mb-3" placeholder='Enter Price' />
                    <button className='btn btn-primary mb-3'>Add</button>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 mt-4">
                      <h4>Cuisine</h4>
                      <div className="card" style={{ borderColor: "#fff" }}>
                        <div className='card-body'>
                          {cuisine.map((item, index) => (
                            <div key={index} className="d-flex justify-content-between">
                              <p style={{ fontSize: "18px" }}>{item.dishname}</p>
                              <div className='d-flex'>
                                <p className='price' style={{ fontSize: "18px" }}>{item.price}</p>
                                <RiDeleteBin6Line className='deleteicon' />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 mt-4">
                      <h4>Drinks</h4>
                      <div className="card" style={{ borderColor: "#fff" }}>
                        <div className='card-body'>
                          {drinks.map((item, index) => (
                            <div key={index} className="d-flex justify-content-between">
                              <p style={{ fontSize: "18px" }}>{item.drinkname}</p>
                              <div className='d-flex'>
                                <p className='price' style={{ fontSize: "18px" }}>{item.price}</p>
                                <RiDeleteBin6Line className='deleteicon' />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 mt-4">
                      <h4>Dessert</h4>
                      <div className='card' style={{ borderColor: "#fff" }}>
                        <div className="card-body">
                          {dessert.map((item, index) => (
                            <div key={index} className="d-flex justify-content-between">
                              <p style={{ fontSize: "18px" }}>{item.dishname}</p>
                              <div className='d-flex'>
                                <p className='price' style={{ fontSize: "18px" }}>{item.price}</p>
                                <RiDeleteBin6Line className='deleteicon' />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {cat === "aminities" && (
                <>
                  <div className='p-3 bg-white border rounded d-flex justify-content-between gap-3'>
                    <input type="text" className="form-control mb-3" placeholder='Enter Amenities' />
                    <input type="number" className="form-control mb-3" placeholder='Enter Price' />
                    <button className='btn btn-primary mb-3'>Add</button>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 mt-4">
                      <h4>Amenities</h4>
                      <div className='card' style={{ borderColor: "#fff" }}>
                        <div className='card-body'>
                          {aminites.map((item, index) => (
                            <div key={index} className="d-flex justify-content-between">
                              <p style={{ fontSize: "18px" }}>{item.no1}</p>
                              <div className='d-flex'>
                                <p className='price' style={{ fontSize: "18px" }}>{item.price}</p>
                                <RiDeleteBin6Line className='deleteicon' />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* {showaddhotelmodel && ( */}

      {/* Modal */}
      <div
        className="modal fade"
        id="addHallModal"
        tabIndex="-1"
        aria-labelledby="addHallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center fw-bold" id="addHallModalLabel">
                Add Hall
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body px-4">
              {currentStep === 1 && (
                <form>
                  {/* Hall Name */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fas fa-building text-warning me-2"></i>
                      Hall Name
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.hallName ? "is-invalid" : ""}`}
                      name="hallName"
                      value={formData.hallName}
                      onChange={handleInputChange}
                      placeholder="Enter hall name"
                    />
                    {errors.hallName && <div className="invalid-feedback">{errors.hallName}</div>}
                  </div>

                  {/* Google Map Address */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fas fa-map-marker-alt text-danger me-2"></i>
                      Google Map Address
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.googleMapsLink ? "is-invalid" : ""}`}
                      name="googleMapsLink"
                      value={formData.googleMapsLink}
                      onChange={handleInputChange}
                      placeholder="Enter Google Map Link"
                    />
                    {errors.googleMapsLink && <div className="invalid-feedback">{errors.googleMapsLink}</div>}
                  </div>

                  {/* Contact Info */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fas fa-phone text-warning me-2"></i>
                      Contact Info
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.contactInfo ? "is-invalid" : ""}`}
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleInputChange}
                      placeholder="Enter contact number"
                    />
                    {errors.contactInfo && <div className="invalid-feedback">{errors.contactInfo}</div>}
                  </div>

                  {/* Capacity and Price */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label d-flex align-items-center">
                        <i className="fas fa-users text-warning me-2"></i>
                        Capacity
                      </label>
                      <input
                        type="number"
                        className={`form-control form-control-lg ${errors.capacity ? "is-invalid" : ""}`}
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        placeholder="Enter capacity"
                      />
                      {errors.capacity && <div className="invalid-feedback">{errors.capacity}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className={`form-control form-control-lg ${errors.hallRentalPrice ? "is-invalid" : ""}`}
                        name="hallRentalPrice"
                        value={formData.hallRentalPrice}
                        onChange={handleInputChange}
                        placeholder="Enter price"
                      />
                      {errors.hallRentalPrice && <div className="invalid-feedback">{errors.hallRentalPrice}</div>}
                    </div>
                  </div>

                  {/* Facebook Page */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fab fa-facebook text-primary me-2"></i>
                      Facebook Page
                    </label>
                    <input
                      type="url"
                      className={`form-control form-control-lg ${errors.facebookLink ? "is-invalid" : ""}`}
                      name="facebookLink"
                      value={formData.facebookLink}
                      onChange={handleInputChange}
                      placeholder="Enter Facebook page URL"
                    />
                    {errors.facebookLink && <div className="invalid-feedback">{errors.facebookLink}</div>}

                  </div>

                  {/* Instagram Account */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fab fa-instagram text-danger me-2"></i>
                      Instagram Account
                    </label>
                    <input
                      type="url"
                      className={`form-control form-control-lg ${errors.instagramLink ? "is-invalid" : ""}`}
                      name="instagramLink"
                      value={formData.instagramLink}
                      onChange={handleInputChange}
                      placeholder="Enter Instagram profile URL"
                    />
                    {errors.instagramLink && <div className="invalid-feedback">{errors.instagramLink}</div>}

                  </div>

                  {/* WhatsApp Link */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fab fa-whatsapp text-success me-2"></i>
                      WhatsApp Link
                    </label>
                    <input
                      type="url"
                      className={`form-control form-control-lg ${errors.whatsappLink ? "is-invalid" : ""}`}
                      name="whatsappLink"
                      value={formData.whatsappLink}
                      onChange={handleInputChange}
                      placeholder="Enter WhatsApp link"
                    />
                    {errors.whatsappLink && <div className="invalid-feedback">{errors.whatsappLink}</div>}

                  </div>
                </form>
              )}

              {currentStep === 2 && (
                <div>
                  {/* Upload Images */}
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="fas fa-images text-warning me-2"></i>
                      Upload up to 6 images
                    </label>
                    {errors.images && <div className="text-danger small mb-2">{errors.images}</div>}
                    <div className="row g-3">
                      {images.map((image, index) => (
                        <div key={index} className="col-md-4">
                          <div
                            className="border border-2 border-dashed rounded p-4 text-center position-relative"
                            style={{ minHeight: "150px", cursor: "pointer" }}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                            onClick={() => document.getElementById(`imageInput${index}`).click()}
                          >
                            {image ? (
                              <div>
                                <img
                                  src={
                                    image instanceof File
                                      ? URL.createObjectURL(image)
                                      : image || "/placeholder.svg"
                                  }
                                  alt={`Preview ${index + 1}`}
                                  className="img-fluid rounded"
                                  style={{ maxHeight: "100px" }}
                                />
                                <p className="small text-success mt-2">
                                  {image.name || "Image Uploaded"}
                                </p>
                              </div>
                            ) : (
                              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                <i className="fas fa-image fa-2x text-muted mb-2"></i>
                                <p className="small text-muted mb-0">Drag & Drop a photo</p>
                                <p className="small text-primary">or Browse</p>
                              </div>
                            )}
                            <input
                              type="file"
                              id={`imageInput${index}`}
                              className="d-none"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(index, e.target.files[0])}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upload Video */}
                  <div className="mb-4">
                    <label className="form-label text-success fw-bold">Video (only 1)</label>
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="border border-2 border-dashed rounded p-4 text-center"
                          style={{ minHeight: "150px", cursor: "pointer" }}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, 0, true)}
                          onClick={() => document.getElementById("videoInput").click()}
                        >
                          {video ? (
                            <div>
                              <i className="fas fa-video fa-2x text-success mb-2"></i>
                              <p className="small text-success">{video.name}</p>
                            </div>
                          ) : (
                            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                              <i className="fas fa-video fa-2x text-muted mb-2"></i>
                              <p className="small text-muted mb-0">Drag & Drop a video</p>
                              <p className="small text-primary">or Browse</p>
                            </div>
                          )}
                          <input
                            type="file"
                            id="videoInput"
                            className="d-none"
                            accept="video/*"
                            onChange={(e) => handleVideoUpload(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5 rounded-pill"
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>


      {showaddpackagemodel && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-body">
                <h5 className='text-center mt-3 text-center'>Add Packages</h5>
                <div className='row'>
                  <div className='col-md-2'></div>
                  <div className='col-md-8 text-center'>
                    <div className='listing-pack mt-2 d-flex flex-wrap gap-4'>
                      <p className={`btn ${pack === "Basic" ? "btn-primary" : "btn-outline-dark"}`} onClick={() => setPack("Basic")}>Basic</p>
                      <p className={`btn ${pack === "Standard" ? "btn-primary" : "btn-outline-dark"}`} onClick={() => setPack("Standard")}>Standard</p>
                      <p className={`btn ${pack === "Premium" ? "btn-primary" : "btn-outline-dark"}`} onClick={() => setPack("Premium")}>Premium</p>
                    </div>
                  </div>
                  <div className='col-md-2'></div>
                </div>
              </div>
              <hr />
              {
                pack === "Basic" && (
                  <>
                    <div className='row'>

                      <div className='col-md-1'></div>
                      <div className='col-md-11'>
                        <h5 className='mb-2 mt-2'>Menu Builder</h5>
                        <div className='listing-pack mt-2 d-flex flex-wrap gap-4'>
                          <p className={`btn ${menubuilder === "cuisine" ? "btn-outline-primary" : "btn-outline-dark"}`} onClick={() => setMenuBuilder("cuisine")}>Cuisine</p>
                          <p className={`btn ${menubuilder === "dessert" ? "btn-outline-primary" : "btn-outline-dark"}`} onClick={() => setMenuBuilder("dessert")}>Dessert</p>
                          <p className={`btn ${menubuilder === "drinks" ? "btn-outline-primary" : "btn-outline-dark"}`} onClick={() => setMenuBuilder("drinks")}>Drinks</p>
                          <p className={`btn ${menubuilder === "comp" ? "btn-outline-primary" : "btn-outline-dark"}`} onClick={() => setMenuBuilder("comp")}>Complementery</p>
                        </div>
                      </div>
                    </div>

                    {
                      menubuilder === 'cuisine' && (
                        <>
                          <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-11'>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Biryani
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Biryani
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Biryani
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Biryani
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Biryani
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-11'>
                              <h5 className='mb-2 mt-2'>Extra Services</h5>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Photography
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                              <div className='menuprice d-flex flex-wrap gap-5'>

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Photography
                                  </label>
                                </div>

                                <div className='price'>
                                  <p>-PKR 20,000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-11'>
                              <h5 className='mb-2 mt-5'>Package Price</h5>
                              <input type='number' className='form-control mt-2 mb-2' style={{ width: "90%" }}></input>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-11 text-center'>
                              <button className='btn btn-primary mt-4 mb-3 addpackbtn' onClick={() => { setShowAddpackageModel(false); setUploadImgmodal(true) }}>Add</button>
                            </div>
                          </div>

                        </>
                      )

                    }
                  </>
                )
              }

              {
                pack === "Standard" && (
                  <>
                    Standard packages
                  </>
                )
              }

              {
                pack === "Premium" && (
                  <>
                    Premium packages
                  </>
                )
              }
            </div>
          </div>
        </div>
      )}


    </div>
    </>
  );
};

export default Listing;

