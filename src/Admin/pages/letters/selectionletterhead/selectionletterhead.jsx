import axios from "axios";
import lettericons from '../../../assets/Images/lettericon.png'
import Icons from '../../../assets/Images/letterlogo.png'
import "./selectionletterhead.css";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";

export function Selectionletterhead(param) {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [user, setusers] = useState({})
  const params = useParams()

  const fetchdata = async () => {
    try {
      const usedata = await axios.get(`http://localhost:7000/candidate/${params.id}`)
      setusers(usedata.data)
    } catch (error) {
      console.error(error, 'catch error');
    }
  }
  console.log(user, 'show user deatils')
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <>

      {/* .............Intern................ */}
      <div className="mainbody">
        <div className="px-4 w-75 border border-2 ">
          <button onClick={reactToPrintFn} className="btn btn-warning">Print</button>
          <div ref={contentRef}>
            <div className="Header row">
              <div className="col-4 text-center align-content-center">
                <img src={Icons} alt="lettericon" style={{ width: '70%' }} />
              </div>
              <div className="col ms-5 ps-2">
                <h2 style={{ letterSpacing: '20px', fontSize: '80px',fontWeight:'bold',fontFamily:'Arial Rounded MT Bold' }}>LOIDS</h2>
                <div className="fw-medium ms-5">─── Marine Services PVT LTD ───</div>
              </div>
            </div>
            <hr />
            {/* ..........Inter Body......... */}
            {
              (user?.selectionletter?.selectiontype === 'Intern')
                ? <div>
                  <div className="Body mx-3 px-5 py-0" style={{ fontSize: '14px' }}>
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
                    <div style={{ textIndent: '30px' }}>
                      <p>
                        We are pleased to inform you that this has reference for your application, After verifying you’re all documents certificates with you. You have selected to join in Merchant Navy as Engine crew/ Deck crew/ Seaman. As a fresher you need to undergo for a short term training. Which we will provide you under Directorate of General Shipping Government (DG SHIPPING). Please check your Reference number for the further Assistance.
                      </p>
                      <p>
                        We are providing you Pre sea basic training. Which includes Theoretical, Practical, and Safety training. During this training period candidates can learn about machinery mechanism, engine mechanism, machinery operating system, engine operating system, Navigation duties, swimming, Watch keeping and work shop practices, Knowledge of shipping industry, Personality development. And also STCW & Security Certificates
                      </p>
                      <p>
                        After completion of training we will provide you shipping license, Identification number ( INDos Number ) by Directorate of General Shipping Government (DG SHIPPING ) ,We are providing 100% assured placement assistance for every candidate who ever successfully completed the training under <b>LOIDS MARINE SERVICES PVT. LTD</b>.</p>
                      <p>
                        Total training charges will be <strong> {user?.selectionletter?.TAmount}</strong>/-. Which you can pay by 3 installments. Course fee, Food, Accommodation, Travelling expenses ( Two way ) and also Medical & Physical. After completion of Pre sea training, candidates can join in the Ship as a trainee. During those training period, candidates will get stipend (20000 – 30000 INR approx & Overtime benefits, Trip allowances depends as per the company norms ) with free food and accommodation.
                      </p>
                      <p>
                        After successful completion of 9/12/18 months of on board sea services, candidates will get a much better salary as depends on work and candidates Performance and hard work. We will not accept any kind of Cheque/DD. You have to pay the initial amount before given date Rs.<strong>{user?.selectionletter?.InitialAmount}</strong>/-
                        <strong> {user?.selectionletter?.DeadlineDate}</strong>. For your seat confirmation. Reporting Date will be known to you after your seat registration.
                        We can assure the best career from our best placement.
                      </p>
                      <p className="fw-bold my-1">Further query call on . 9600630942</p>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          WISH YOU A BRIGHT FUTURE...
                        </div>
                        <strong>
                          LOIDS MARINE SERVICES PVT .LTD.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                : <div>
                  <div className="Body mx-3 px-5 py-0">
                    <div>
                      <div className="text-center h2 my-5" >SELECTION LETTER </div>
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
                        <div className="fw-bold my-4">
                          Dear Candidate,
                        </div>
                      </div>
                    </div>
                    <div style={{ textIndent: '30px' }}>
                      <p>
                        We are happy to announce that you have selected to join our company LOIDS MARINE SERVICES PVT LTD after verifying your documents and certificates.
                      </p>
                      <br />
                      <p>
                        Your basic salary as a trainees will be 25000-35000. And there are also additional benefits. The trip salary will be determined by the company’s standards.
                      </p>
                      <br />
                      <p>
                        Once your initial payment is made, your joining date will be with in 30-40days. Our fleet comprises oil tankers, general cargo, containers, and supply vessels, all of which offer IMO services.
                      </p>
                      <br />
                      <p>
                        Your initial payments of <strong> {user?.selectionletter?.TAmount}</strong>/-. must be made on before {user?.selectionletter?.DeadlineDate}. The job guarantee letter from our company must be signed after making the initial payment.
                      </p>
                      <br />
                      <p className="mt-3">
                        We are looking forward.... All the best for your career ahead
                      </p>
                      <p className="fw-bold my-2">Further query call on . 9600630942</p>
                    </div>

                    <div >
                      <div className="d-flex justify-content-between mt-3">
                        <strong>
                          WISH YOU A BRIGHT FUTURE...
                        </strong>
                        <strong>
                          LOIDS MARINE SERVICES PVT .LTD.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '80px' }}>
                    <hr />
                  </div>
                </div>
            }


            <div className="Footer mx-3 px-5" style={{ fontSize: '14px' }}>
              <div className="text-center" >
                <div>
                  CIN: U78300TZ2024PTC032226
                </div>
                <div>
                  LOIDS MARINE SERVICES Pvt Ltd
                </div>
                <div>
                  {user?.interviewoutcome?.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
