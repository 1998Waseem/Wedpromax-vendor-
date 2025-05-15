import React, { useState } from 'react'
import Siderbar from './Siderbar';
import './Listing.css';
import listingimg from '../../src/assets/images/listingimg.svg'
import packageicon from '../../src/assets/icons/Package.svg'
import fbicon from '../../src/assets/icons/Facebook.svg'
import instaicon from '../../src/assets/icons/instagram.svg'
import whatsappicon from '../../src/assets/icons/Whatsapp.svg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbBuildingStore } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";




const Listing = () => {
    const listingdata = [
        { id: 1, hallname: "Taj Marriage Hall" },
        { id: 2, hallname: "Afaz Marriage Hall" },
        { id: 3, hallname: "Jan Marriage Hall" },
    ];

    const [cat, setCat] = useState('myhalls');
    const [showaddhotelmodel, setShowAddhotelModel] = useState(false);
    const [pack, setPack] = useState('Basic');
    const [showaddpackagemodel, setShowAddpackageModel] = useState(false);
    const [menubuilder, setMenuBuilder] = useState('cuisine');
    const [uploadimgmodal, setUploadImgmodal] = useState(false)

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

    const addhallimg = [
        {
            id: 1,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",

            id: 2,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",

            id: 3,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",

            id: 4,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",

            id: 5,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",

            id: 6,
            "img": <IoImageOutline />,
            "desc1": "Drag & Drop a photo or",
            "desc2": "Browse",
        }
    ]

    return (
        <><div className="card rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 col-lg-12 p-4">
                            <div className='title'>
                                <h4>My Listing</h4>
                                <button className='btn btn-primary addhallbtn' onClick={() => setShowAddhotelModel(true)}>+ Add Hall</button>
                            </div>
                            <div className='listing-cat mt-2 d-flex flex-wrap gap-3'>
                                <p className={`btn ${cat === "myhalls" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("myhalls")}>My Halls</p>
                                <p className={`btn ${cat === "mymenu" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("mymenu")}>My Menu</p>
                                <p className={`btn ${cat === "aminities" ? "activetab" : "nonactivetab"}`} onClick={() => setCat("aminities")}>Amenities</p>
                            </div>

                            {cat === "myhalls" && listingdata.map((item, index) => (
                                <div key={index} className="listing-item mb-3 p-3 border rounded">
                                    <div className="row">
                                        <div className='col-md-3'>
                                            <img src={listingimg} alt='' />
                                        </div>
                                        <div className='col-md-7'>
                                            <p className='hname'>{item.hallname}</p>
                                            <div className='social_icons d-flex flex-wrap gap-3'>
                                                <p className='packages'><img src={packageicon} alt='' /><span>Package</span></p>
                                                <p className='fb'><img src={fbicon} alt='' /><span>Facebook</span></p>
                                                <p className='insta'><img src={instaicon} alt='' /><span>Instagram</span></p>
                                                <p className='whatsapp'><img src={whatsappicon} alt='' /><span>Whatsapp</span></p>
                                            </div>
                                        </div>
                                        <div className='col-md-2' style={{ textAlign: "right" }}>
                                            <RiDeleteBin6Line style={{ color: "#E53935", fontSize: "25px" }} />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {cat === "mymenu" && (
                                <>
                                    <div className='p-3 bg-white border rounded d-flex justify-content-between gap-3'>
                                        <select className="form-select mb-3">
                                            <option selected>Select Category</option>
                                            <option value="1">Cuisine</option>
                                            <option value="2">Drinks</option>
                                            <option value="3">Dessert</option>
                                        </select>
                                        <select className="form-select mb-3">
                                            <option selected>Select Item</option>
                                            <option value="1">Biryani</option>
                                            <option value="2">Pepsi</option>
                                            <option value="3">Ras Malai</option>
                                        </select>
                                        <input type="number" className="form-control mb-3" placeholder='Enter Price' />
                                        <button className='btn btn-primary mb-3'>Add</button>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12 mt-4">
                                            <h4>Cuisine</h4>
                                            {cuisine.map((item, index) => (
                                                <div key={index} className="d-flex justify-content-between">
                                                    <p>{item.dishname}</p>
                                                    <div className='d-flex'>
                                                        <p className='price'>{item.price}</p>
                                                        <RiDeleteBin6Line className='deleteicon' />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12 mt-4">
                                            <h4>Drinks</h4>
                                            {drinks.map((item, index) => (
                                                <div key={index} className="d-flex justify-content-between">
                                                    <p>{item.drinkname}</p>
                                                    <div className='d-flex'>
                                                        <p className='price'>{item.price}</p>
                                                        <RiDeleteBin6Line className='deleteicon' />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12 mt-4">
                                            <h4>Dessert</h4>
                                            {dessert.map((item, index) => (
                                                <div key={index} className="d-flex justify-content-between">
                                                    <p>{item.dishname}</p>
                                                    <div className='d-flex'>
                                                        <p className='price'>{item.price}</p>
                                                        <RiDeleteBin6Line className='deleteicon' />
                                                    </div>
                                                </div>
                                            ))}
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
                                            {aminites.map((item, index) => (
                                                <div key={index} className="d-flex justify-content-between">
                                                    <p>{item.no1}</p>
                                                    <div className='d-flex'>
                                                        <p className='price'>{item.price}</p>
                                                        <RiDeleteBin6Line className='deleteicon' />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {showaddhotelmodel && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">
                                <h5 className='text-center mt-3'>Add Hall</h5>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className='mt-3 mb-2'><TbBuildingStore /> &nbsp; Hall Name</label>
                                        <input type="text" className='form-control'></input>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className='mt-3 mb-2'><FiMapPin /> &nbsp; Google Map Address</label>
                                        <select className="form-select mb-3">
                                            <option selected>Select an Address</option>
                                            <option value="1">Lahore</option>
                                            <option value="2">Rawalpindi</option>
                                            <option value="3">Islamabad</option>
                                            <option value="4">Multan</option>
                                        </select>
                                    </div>
                                </div>




                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='mt-3 mb-2'><MdOutlineReduceCapacity /> &nbsp; Capacity</label>
                                        <input type="number" className='form-control'></input>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='mt-3 mb-2'><IoIosPricetag /> &nbsp; Price</label>
                                        <input type="number" className='form-control'></input>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-md-12">
                                        <label className='mt-3 mb-2'><FaFacebookSquare /> &nbsp; Facebook Page</label>
                                        <input type="text" className='form-control'></input>
                                    </div>

                                </div>

                                <div className="row mb-2">
                                    <div className="col-md-12">
                                        <label className='mt-3 mb-2'><FaInstagram /> &nbsp; Instagram Acocunt</label>
                                        <input type="text" className='form-control'></input>
                                    </div>

                                </div>

                                <div className="row mb-2">
                                    <div className="col-md-12">
                                        <label className='mt-3 mb-2'><FaWhatsapp /> &nbsp; Whatsapp Link</label>
                                        <input type="text" className='form-control'></input>
                                    </div>

                                </div>

                                <div className='row mt-2 mb-2'>
                                    <div className='col-md-12' style={{ textAlign: "center" }}>
                                        <button className="btn btn-primary nextbtn"
                                            onClick={() => {
                                                setShowAddhotelModel(false); // Hide current modal
                                                setShowAddpackageModel(true); // Show next modal
                                            }}>Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


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

            {uploadimgmodal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">
                                <h5 className='text-center mt-3'>&nbsp; &nbsp; Add Hall</h5>

                                <div className='container'>
                                   <div className='row mt-3 mb-3'>
                                    <p><IoImageOutline className='yellowimgicon'/> Upload up to 6 images</p>
                                    <div className="col-md-4  text-center">
                                        <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                       
                                    </div>
                                    <div className="col-md-4 text-center">
                                    <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                       
                                    </div>
                                    <div className="col-md-4 text-center">
                                    <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                    </div>
                                   </div>
                                   <div className='row mt-3 mb-3'>
                                    <div className="col-md-4 text-center">
                                    <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                    <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                    <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                    </div>
                                   </div>
                                    </div>

                                    <div className='container'>
                                   <div className='row mt-3 mb-3'>
                                   <p>Video ( Only 1)</p>
                                    <div className="col-md-4  text-center">
                                        <div className="images">
                                        <IoImageOutline className='hallimg'/>
                                        <p>Drag & Drop a photo or <span className='text-primary'>Browse</span></p>
                                        </div>
                                       
                                    </div>
                                    <div className="col-md-4 text-center">
                                    
                                       
                                    </div>
                                    <div className="col-md-4 text-center">
                                   
                                    </div>
                                   </div>

                                   <div className='row mt-4 mb-3'>
                                  
                                    <div className="col-md-4  text-center">
                                       
                                    </div>
                                    <div className="col-md-4 text-center">
                                    <button class="btn btn-primary w-100 nextbtn" onClick={()=>setUploadImgmodal(false)}>Next</button>
                                   </div>
                                    <div className="col-md-4 text-center">
                                   
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            )}
            </div>
        </>
    );
};

export default Listing;

