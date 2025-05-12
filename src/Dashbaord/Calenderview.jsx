import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Siderbar from './Siderbar';
import available from '../../src/assets/icons/available.svg'
import unavailable from '../../src/assets/icons/unavialable.svg'
import block from '../../src/assets/icons/blocked.svg'


const Calenderview = () => {


    return (
        <>
            <div className='container'>
                <div className="row">


                    <div className="col-md-4 col-lg-3 bg-white shadow-sm rounded-end-4 p-4 d-flex flex-column"
                        style={{ minHeight: "100vh" }}
                    >
                        <Siderbar />
                    </div>
                    <div className="col-md-8 col-lg-9 p-4">
                        <div className='rounded-4 p-4 shadow-sm'>
                            <h5>Calender View</h5>

                            <div className='row' style={{marginTop:"70px",marginBottom:"40px"}}>
                                <div className='col-md-1'></div>
                                <div className='col-md-7'>
                                    <Calendar />
                                </div>
                                <div className='col-md-4'>
                                    <div className='availableslot'>
                                        <span><img src={available}></img>  Available</span>
                                    </div>

                                    <div className='unavailableslot' style={{marginTop:"70px",marginBottom:"70px"}}>
                                        <span><img src={unavailable}></img>  UnAvailable</span>
                                    </div>

                                    <div className='block'>
                                        <span><img src={block}></img>  Block</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calenderview
