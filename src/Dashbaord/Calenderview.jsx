import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import available from '../../src/assets/icons/available.svg';
import unavailable from '../../src/assets/icons/unavialable.svg';
import block from '../../src/assets/icons/blocked.svg';
import ToggleButton from 'react-toggle-button'
import './Calendar.css'
const Calenderview = () => {



    const [selectedDate, setSelectedDate] = useState(null);
    const [value, setValue] = useState(false)

    const ToggleSwitch = ({ label = "Sync with Platform" }) => {
        const id = "sync-toggle";
        const [isChecked, setIsChecked] = useState(false);

        const handleChange = (e) => {
            setIsChecked(e.target.checked);
        };
    }

    const [showModal, setShowModal] = useState(false);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDate(null);
    };

    return (
        <>
            <div className="card rounded-4 shadow-sm h-100" style={{backgroundColor:"#F5F5F5"}}>
                <div className="card-body p-4">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 p-4">
                                <div className='calendar'>
                                    <h5>Calendar View</h5>
                                    <div className='row' style={{ marginTop: "70px", marginBottom: "40px" }}>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-7'>
                                            <Calendar onClickDay={handleDateClick} />
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='availableslot'>
                                                <span><img src={available} alt="available" /> Available</span>
                                            </div>
                                            <div className='unavailableslot' style={{ marginTop: "70px", marginBottom: "70px" }}>
                                                <span><img src={unavailable} alt="unavailable" /> UnAvailable</span>
                                            </div>
                                            <div className='block'>
                                                <span><img src={block} alt="blocked" /> Block</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-body">
                                <h4 className='text-center mt-3 mb-3'>Manage Date: <strong className='text-primary'>{selectedDate.toDateString()}</strong></h4>
                                <div className='Date d-flex mt-3 mb-3 gap-4'>
                                    <p>Date:</p>
                                    <p>{selectedDate.toDateString()}</p>
                                </div>
                                <div className='status d-flex mt-3 mb-3 gap-4'>
                                    <p>Status:</p>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Available
                                        </label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Unavailable
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Blocked
                                        </label>
                                    </div>
                                </div>
                                <div className='cname d-flex mt-3 mb-3 gap-4'>
                                    <label>Customer Name:</label>
                                    <input type="text" className='form-control' />
                                </div>

                                <div className='cnumber d-flex mt-3 mb-3 gap-4'>
                                    <label>Contact Number:</label>
                                    <input type="number" className='form-control' />
                                </div>

                                <div className='trange d-flex mt-3 mb-3 gap-5'>
                                    <label>Time Range:</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Evening</option>
                                        <option value="1">Morning</option>
                                        <option value="2">Afternoon</option>
                                        <option value="3">Night</option>
                                    </select>
                                </div>

                                <div className="togglebtn d-flex mt-5 mb-4 justify-content-between">
                                    <label className="mb-0">Sync with Platform: </label>
                                    <div className="toggle_btn">
                                        <ToggleButton
                                            value={value}
                                            onToggle={() => setValue(!value)}
                                        />
                                    </div>
                                </div>

                                <div className='btm_btns d-flex justify-content-end gap-3 mt-3 mb-3'>
                                    <button className='btn btn-light' onClick={()=>closeModal()}>Cancel</button>
                                    <button className='btn btn-primary' onClick={()=>closeModal()}>Save Changes</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Calenderview;
