import React, { useState, useEffect } from 'react'
import listingimg from '../../src/assets/images/listingimg.svg'
import { FaTrashAlt } from "react-icons/fa";
import ToggleButton from 'react-toggle-button'
import { BsBoxSeam } from "react-icons/bs"
import packagesicon from '../assets/icons/Package.svg';
import fbicon from '../assets/icons/Facebook.svg'
import instaicon from '../assets/icons/instagram.svg'
import Whatsappicon from '../assets/icons/Whatsapp.svg'
import { VscPercentage } from "react-icons/vsc";
import { IoIosPricetag } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

import './Myhall.css';




const MyHalls = () => {
    const [value, setValue] = useState(false)
    const [discountmodal, setDiscontModal] = useState(false);
    const [isToggleActive, setIsToggleActive] = useState(false);


    useEffect(() => {
        if (isToggleActive) {
            setDiscontModal(true);
        }
    }, [isToggleActive]);

    const handleToggleChange = () => {
        setIsToggleActive(!isToggleActive);
    };

    const handleCloseModal = () => {
        setDiscontModal(false);
        setIsToggleActive(false); // Reset toggle when modal closes
    };

    const handleModalBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    return (
        <>
            <div class="card rounded-4 mt-4">
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={listingimg} alt='hallimg' style={{ width: "100%" }}></img>
                        </div>
                        <div className='col-md-9'>

                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className='hallname'>Taj Marriage Hall</h3>
                                </div>
                                <div className="col-md-4 d-flex justify-content-between">
                                    <p className='adddiscount text-primary'>Add Discount</p>
                                    <div className="form-check form-switch">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="toggleSwitch"
                                            checked={isToggleActive}
                                            onChange={handleToggleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn text-danger border-0">
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="row gap-5 iconsrow">
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center" style={{ background: "#E6E6E6 !important" }}>
                                        <img src={packagesicon} />&nbsp;
                                        <span>Packages</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={fbicon}></img>&nbsp;
                                        <span>Facebook</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={instaicon}></img>&nbsp;
                                        <span>Instagram</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={Whatsappicon}></img>&nbsp;
                                        <span>Whatsapp</span>
                                    </button>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-4 mt-4">
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={listingimg} alt='hallimg' style={{ width: "100%" }}></img>
                        </div>
                        <div className='col-md-9'>

                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className='hallname'>Taj Marriage Hall</h3>
                                </div>
                                <div className="col-md-4 d-flex justify-content-between">
                                    <p className='adddiscount text-primary'>Add Discount</p>
                                    <div className="form-check form-switch">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="toggleSwitch"
                                            checked={isToggleActive}
                                            onChange={handleToggleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn text-danger border-0">
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="row gap-5 iconsrow">
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center" style={{ background: "#E6E6E6 !important" }}>
                                        <img src={packagesicon} />&nbsp;
                                        <span>Packages</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={fbicon}></img>&nbsp;
                                        <span>Facebook</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={instaicon}></img>&nbsp;
                                        <span>Instagram</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={Whatsappicon}></img>&nbsp;
                                        <span>Whatsapp</span>
                                    </button>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-4 mt-4">
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={listingimg} alt='hallimg' style={{ width: "100%" }}></img>
                        </div>
                        <div className='col-md-9'>

                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className='hallname'>Taj Marriage Hall</h3>
                                </div>
                                <div className="col-md-4 d-flex justify-content-between">
                                    <p className='adddiscount text-primary'>Add Discount</p>
                                    <div className="form-check form-switch">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="toggleSwitch"
                                            checked={isToggleActive}
                                            onChange={handleToggleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn text-danger border-0">
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="row gap-5 iconsrow">
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center" style={{ background: "#E6E6E6 !important" }}>
                                        <img src={packagesicon} />&nbsp;
                                        <span>Packages</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={fbicon}></img>&nbsp;
                                        <span>Facebook</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={instaicon}></img>&nbsp;
                                        <span>Instagram</span>
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-light px-3 py-2 d-flex align-items-center">
                                        <img src={Whatsappicon}></img>&nbsp;
                                        <span>Whatsapp</span>
                                    </button>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className={`modal fade ${discountmodal ? 'show' : ''}`}
                style={{ display: discountmodal ? 'block' : 'none' }}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden={!discountmodal}
                onClick={handleModalBackdropClick}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h3>Discount Setting</h3>
                                    <div className="d-flex justify-content-between mt-4">
                                        <p>Enable Discount</p>
                                        <div className="form-check form-switch">

                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="toggleSwitch"
                                                checked={isToggleActive}
                                                onChange={handleToggleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className='inputfields mt-3'>
                                        <label>Discount Percentage</label>
                                        <div className="inputfield d-flex justify-content-between mt-3 ">
                                            <input type="text" className='form-control' placeholder='10' />
                                            <VscPercentage className='inputfieldicons'/>
                                        </div>
                                    </div>

                                    <div className='inputfields mt-3'>
                                        <label>Maximum Discount Cap</label>
                                        <div className="inputfield d-flex justify-content-between mt-3 ">
                                            <input type="text" className='form-control' placeholder='5,000' />
                                            <IoIosPricetag className='inputfieldicons'/>
                                        </div>
                                    </div>

                                    <div className='inputfields mt-3'>
                                        <label>Discount Period</label>
                                        <div className="inputfield d-flex justify-content-between mt-3 ">
                                            <input type="date" className='form-control' placeholder='10' />
                                            
                                        </div>
                                    </div>

                                    <div className='inputfields mt-3'>
                                        <label>End Date</label>
                                        <div className="inputfield d-flex justify-content-between mt-3 ">
                                            <input type="date" className='form-control' placeholder='10' />
                                           
                                        </div>
                                    </div>

                                    <button className="btn btn-primary rounded-3 w-100 mt-4">Save</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal backdrop */}
            {discountmodal && (
                <div
                    className="modal-backdrop fade show"
                    onClick={handleCloseModal}
                ></div>
            )}
        </>
    )
}

export default MyHalls
