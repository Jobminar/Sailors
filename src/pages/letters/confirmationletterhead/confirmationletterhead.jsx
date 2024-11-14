import { useParams } from "react-router-dom";
import leterheadheader from "../../../assets/Images/leterheadheader.png";
import lettericons from '../../../assets/Images/lettericon.png'
import "./confirmationletterhead.css";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { useCookies } from "react-cookie";

export function UserConfirmationletter() {
    const { id } = useParams();
    const [user, setusers] = useState({})
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const [cookies, setcookie, removecookie] = useCookies(["user"]);
    const apiKey = process.env.REACT_APP_BASE_URL

    const Fetchdata = async () => {
        try {
            const alluser = await axios.get(`https://sailorswaveadmins-backend.onrender.com/candidates`)
            const user = alluser.data;
            const finduser = user.find((usernumber) => parseInt(usernumber.mobileNumber) === cookies.user)
            setusers(finduser)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Fetchdata()
    }, [])
    return (
        <>
            {
                (user?.confirmationletter?.status === undefined) ? <div className="px-4 text-center h2 text-warning" style={{ height: '50vh' }}>Letter not found</div> :
                    <div className="mainbody">
                        <div className="px-4 w-75 border border-2 ">
                            <button onClick={reactToPrintFn} className="btn btn-warning">Print</button>
                            <div ref={contentRef}>
                                <div className="Header row my-5">
                                    <div className="col-3 text-center align-content-center">
                                        <img src={lettericons} alt="lettericon" style={{ width: '80%' }} />
                                    </div>
                                    <div className="col ms-5">
                                        <h2 style={{ letterSpacing: '20px', fontSize: '80px' }}>LOIDS</h2>
                                        <div className="fw-medium ms-5 ps-3">-- Marine Services PVT LTD --</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="Body my-3 mx-3 px-5">
                                    <div>
                                        <div className="text-center h2 mb-5">CONFIRMATION LETTER</div>
                                        <strong className="mb-4 mt-1 fw-medium">Dear Applicant,</strong>
                                        <div >
                                            <strong className="row">
                                                <div className="col-3">Application No</div>
                                                <div className="col">:LY {user?.applicationId}</div>
                                            </strong>
                                            <strong className="row">
                                                <div className="col-3">Name of candidate</div>
                                                <div className="col">:{user?.candidateName}</div>
                                            </strong>
                                            <strong className="row">
                                                <div className="col-3">Father Name</div>
                                                <div className="col">:{user?.fatherName}</div>
                                            </strong>
                                            <div className="fw-medium my-3">Congratulations,</div>
                                            <p>
                                                We are glad to inform you that the seat has been reserved for the pre-sea training. Hereafter, we need to apply for your seafarer identification number. Once done, we can send your training batch details and batch starting date.
                                            </p>
                                            <p>
                                                After completion of your training, we will provide you placement assurance in India and foreign vessels.
                                            </p>
                                        </div>
                                    </div>
                                    <strong className="m-2">
                                        <div className="row">
                                            <span className="col-3">Installment dates</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">2nd Installment date</div>
                                            <div className="col">:<span>{user?.confirmationletter?.InstalmentAmount2}/- ON {user?.confirmationletter?.InstalmentDate2}</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">3rd Installment date</div>
                                            <div className="col">:<span>{user?.confirmationletter?.InstalmentAmount3}/- ON {user?.confirmationletter?.InstalmentDate3}</span></div>
                                        </div>
                                        <p>
                                            <span>REPORTING DATE:</span> 04/11/2024 (CANDIDATE SHOULD COME TO BRANCH OFFICE ON THE SAME DATE AT 10:30 AM)
                                        </p>
                                        <p>
                                            <span>NOTE:</span> Candidate should bear the Visa & Ticket charges / Onboard Pro Charges.
                                        </p>
                                        <p className="fw-medium">For query: 9600630942</p>
                                    </strong>
                                </div>

                                <div className="Footer mx-3 px-5">
                                    <div>
                                        <div className="d-flex justify-content-between p-3">
                                            <strong>
                                                WISH YOU A BRIGHT FUTURE...
                                            </strong>
                                            <strong>
                                                LOIDS MARINE SERVICES PVT .LTD.
                                            </strong>
                                        </div>
                                        <div className="text-center">
                                            <div>
                                                CIN: U78300TZ2024PTC032226
                                            </div>
                                            <div>
                                                LOIDS MARINE SERVICES Pvt Ltd
                                            </div>
                                            <div>
                                                <div>
                                                    Branch - I, 6-1, Jothi Nagar, 2nd Street, Ramanuja Nagar, Coimbatore, Tamilnadu - 641015
                                                </div>
                                                <div>
                                                    Branch - II, 508,5th floor, prajay princton towers, saroornagar, lb nagar, hyd - 500035
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            }

        </>
    );
}

