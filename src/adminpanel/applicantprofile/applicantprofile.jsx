import { useState } from 'react'
import profile from '../../assets/Images/dp-dummy.png'
export function Applicantprofile() {
    const [applicantdetails, setapplicatdetails] = useState({ name: "Nikhil ahirwar", DOB: "29/08/2001", Gmail: "Nikhilraj2908@gmail.com", Location: "Vidisha" })
    return (
        <>
            <div className='container row'>

                <div className='col-9 bg-light'>
                    <div className='fw-bold fs-5 '>About</div>
                    <div className='mt-5 ps-4 d-flex align-items-center ' >
                        <div className="row text-secondary " style={{ height: "30vh", backgroundColor: "white", boxShadow: "1px 1px 5px 4px #edf1f0  " }}>
                            <div className='col-3 d-flex align-items-center'>
                                <img className='border border-1 rounded bg-secondary' src={profile} alt="Profile Pictre" style={{ width: "100%", }}></img>
                            </div>
                            <div className='col-9 ps-4 ' style={{ alignContent: "center" }} >
                                <dl >
                                    <div className='row'>
                                        <dt className='col-3'>Name:</dt>
                                        <dd className='col-9'>{applicantdetails.name}</dd>

                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Birth Date:</dt>
                                        <dd className='col-9'>{applicantdetails.DOB}</dd>
                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Email:</dt>
                                        <dd className='col-9'>{applicantdetails.Gmail}</dd>
                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Location:</dt>

                                        <dd className='col-9'>{applicantdetails.Location}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className='fw-bold text-secondary bg-light p-3'>
                        Documents from user
                    </div>
                    <div className='bg-light text-secondary fw-bold p-3'>
                        Financials
                    </div >
                    <div className='bg-light text-secondary p-3 fw-bold'>My Applications</div>
                </div>
            </div>

        </>
    )
}