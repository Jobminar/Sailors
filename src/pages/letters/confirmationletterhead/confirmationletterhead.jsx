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
            <div className="mainbody">
                <div className="px-4 w-50 border border-2 ">
                    <div className="Header row">
                        <div className="col-3 text-center align-content-center">
                            <img src={lettericons} alt="lettericon" style={{ width: '80%' }} />
                        </div>
                        <div className="col text-center">
                            <h2 style={{ letterSpacing: '20px', fontSize: '80px' }}>LOIDS</h2>
                            <div className="fw-medium">-- Marine Services PVT LTD --</div>
                        </div>
                    </div>
                    <div className="Body mt-3">
                        <div>

                            <div className="text-center h2">CONFIRMATION LETTER</div>
                            <div className="mb-4 mt-1 fw-medium">Dear Applicant,</div>
                            <div>
                                <div className="row">
                                    <div className="col-4">Application No</div>
                                    <div className="col">:<strong> LY {user?.applicationId}</strong></div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Name of candidate</div>
                                    <div className="col">:<strong> {user?.candidateName}</strong></div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Father Name</div>
                                    <div className="col">:<strong> {user?.fatherName}</strong></div>
                                </div>
                                <div className="fw-medium my-3">Congratulations,</div>
                                <p>
                                    We are glad to inform you that the seat has been reserved for the pre-sea training. Hereafter, we need to apply for your seafarer identification number. Once done, we can send your training batch details and batch starting date.
                                </p>
                                <p>
                                    After completion of your training, we will provide you placement assurance in India and foreign vessels.
                                </p>
                            </div>
                        </div>
                        <div style={{ textIndent: '30px' }}>
                            <div className="row my-3">
                                <div className="col-4">Installment dates</div>
                            </div>
                            <div className="row">
                                <div className="col-4">2nd Installment date</div>
                                <div className="col">:<strong> Rs. 10,000/- ON 30-10-2024</strong></div>
                            </div>
                            <div className="row">
                                <div className="col-4">3rd Installment date</div>
                                <div className="col">:<strong> Rs. 55,000/- ON 04-11-2024</strong></div>
                            </div>
                            <p>
                                <strong>REPORTING DATE:</strong> 04/11/2024 (CANDIDATE SHOULD COME TO BRANCH OFFICE ON THE SAME DATE AT 10:30 AM)
                            </p>
                            <p>
                                <strong>NOTE:</strong> Candidate should bear the Visa & Ticket charges / Onboard Pro Charges.
                            </p>
                            <p className="fw-medium">For query: 9600630942</p>
                        </div>
                    </div>

                    <div className="Footer">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    WISH YOU A BRIGHT FUTURE...
                                </div>
                                <strong>
                                    LOIDS MARINE SERVICES PVT .LTD.
                                </strong>
                            </div>
                            <div className="text-center mt-3">
                                <div>
                                    CIN: U78300TZ2024PTC032226
                                </div>
                                <div>
                                    LOIDS MARINE SERVICES Pvt Ltd
                                </div>
                                <div>6-1, Jothi Nagar, 2nd Street, Ramanuja Nagar, Coimbatore, Tamilnadu - 641015</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

