import "./admitcardletter.css";
import Icons from '../../../assets/Images/letterlogo.png'
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export function Admitcardletterhead() {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [user, setUser] = useState({})
  const param = useParams()
  const apiKey = process.env.REACT_APP_BASE_URL
  const [adminCookie, setadminCookie, removeadminCookie] = useCookies(["useradmin", "admin"]);

  const fetchdata = async () => {
    try {
      const usedata = await axios.get(`http://localhost:7000/candidate/${param.applicationNo}`)
      const users = usedata.data;
      setUser(users)
    } catch (error) {
      console.error(error, 'catch error');
    }
  }
  useEffect(() => {
    fetchdata();
  }, [])
  return (
    <>
      <div className="mainbody">
        <div className="px-4 w-75 border border-2 ">
          <button onClick={reactToPrintFn} className="btn btn-warning">Print</button>
          <div ref={contentRef}>
            <div className="Header row my-3">
              <div className="col-4 text-center align-content-center">
                <img src={Icons} alt="lettericon" style={{ width: '70%' }} />
              </div>
              <div className="col ms-5 ps-2">
                <h2 style={{ letterSpacing: '20px', fontSize: '80px',fontWeight:'bold',fontFamily:'Arial Rounded MT Bold' }}>LOIDS</h2>
                <div className="fw-medium ms-5">─── Marine Services PVT LTD ───</div>
              </div>
            </div>
            <hr />
            <div className="Body my-5 px-5 mx-4">
              <div>
                <div className="text-center h2 mt-1 mb-3 fw-bold " style={{fontFamily:'Arial'}}>ADMIT CARD</div>
                <div>
                  <div className="row">
                    <div className="col-3">Application No</div>
                    <div className="col">:<strong> LY {user?.applicationId}</strong></div>
                  </div>
                  <div className="row">
                    <div className="col-3">Name of Candidate</div>
                    <div className="col">:<strong> {user?.candidateName}</strong></div>
                  </div>
                  <div className="row">
                    <div className="col-3">Father Name</div>
                    <div className="col">:<strong> {user?.fatherName}</strong></div>
                  </div>
                  <div className="fw-medium my-4 fw-bolder">Dear candidate,</div>
                  <p>
                    Your qualifications have impressed us, and we would like to have a discussion with you.
                  </p>
                  <p>
                    If you have any queries, feel free to call me on <strong>96006-30942</strong> and reach me at <strong>loidsmarineservicespvtltd@gmail.com</strong>.
                  </p>
                </div>
              </div>
              <div className="mt-4 py-2">
                <div className="row">
                  <div className="col-4">Interview Scheduled Date</div>
                  <div className="col">:<strong>{user?.admitcard?.date}</strong></div>
                </div>
                <div className="row">
                  <div className="col-4">Time</div>
                  <div className="col">:<strong>{user?.admitcard?.time}</strong></div>
                </div>
                <div className="row">
                  <div className="col-4">Venue Details</div>
                  <div className="col">:<strong >{user?.interviewoutcome?.address} </strong></div>
                </div>
                <div className="fw-medium my-3 pt-2">Interview Instructions</div>
                <ul>
                  <li>It is mandatory for candidates to carry their educational certificates and CVs.</li>
                  <li>Interview letters should be carried by candidates during the interview.</li>
                  <li>In the interview hall, there is a strict ban on cell phones, cameras, bags, and other unnecessary items.</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="Foote mt-3  px-2">
              <div>
                <div className="text-center">
                  <div>
                    CIN: U78300TZ2024PTC032226
                  </div>
                  <div>
                    LOIDS MARINE SERVICES Pvt Ltd
                  </div> 
                  <div>
                    <div>
                    {user?.interviewoutcome?.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
