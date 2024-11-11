import axios from "axios";
import lettericons from '../../../assets/Images/lettericon.png'
import "./selectionletterhead.css";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export function UserSelectionletter(param) {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [user, setusers] = useState({})
  const params = useParams();
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
  console.log(user, 'user details')
  useEffect(() => {
    Fetchdata()
  }, [])

  return (
    <>
      <div className="mainbody">
        <div className="px-4 w-75 border border-2 ">
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
              <div className="text-center h2" >SELECTION LETTER</div>
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
                <div className="fw-medium my-3" >Welcome to LOIDS MARINE SERVICES PVT .LTD.</div>
              </div>
            </div>
            <div style={{textIndent:'30px'}}>
              <p>
                We are pleased to inform you that this has reference for your application, After verifying your all documents certificates with you. You have selected to join in Merchant Navy as Engine crew/Deck crew/ Seaman. As a fresher you need to undergo for a short term training. Which we will provide you under Directorate of General Shipping Government (DG SHIPPING). Please check your Reference number for the further Assistance.
              </p>
              <p>
                We are providing you Pre sea basic training. Which includes Theoretical, Practical, and Safety training. During this training period candidates can learn about machinery mechanism, engine mechanism, machinery operating system, engine operating system, Navigation duties, swimming, Watch keeping and work shop practices, Knowledge of shipping industry, Personality development. And also STCW & Security Certificates.
              </p>
              <p>
                After completion of training we will provide you shipping license, Identification number ( INDos Number ) by Directorate of General Shipping Government (DG SHIPPING ), We are providing 100% assured placement assistance for every candidate who ever successfully completed the training under LOIDS MARINE SERVICES PVT. LTD.
              </p>
              <p>
                Total training charges will be <strong> {user?.selectionletter?.TAmount}</strong>. Which you can pay by 3 installments. Course fee, Food, Accommodation, Travelling expenses ( Two way ) and also Medical & Physical.</p>
              <p>After completion of Pre sea training, candidates can join in the Ship as a trainee. During this trainee period, candidates will get stipend (20000 – 35000 INR approx & Overtime benefits, Trip allowances depends as per the company norms ) with free food and accommodation.
              </p>
              <p>
                After successful completion of 9/12/18 months of on board sea services, candidates will get a much better salary as depends on work and candidates Performance and hard work. We will not accept any kind of Cheque/DD. You have to pay the initial amount before given date Rs.<strong>{user?.selectionletter?.InitialAmount}</strong>/-
                <strong> {user?.selectionletter?.DeadlineDate}</strong>. For your seat confirmation. Reporting Date will be known to you after your seat registration.
                We can assure the best career from our best placement.
              </p>
              <p className="fw-medium">Further query call on . 9600630942</p>
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
