import "./admitcardletter.css";
// import lettericons from '../../../assets/Images/lettericon.png'
import Icons from '../../../assets/Images/LOIDSMARINE-logo.png'
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
      const usedata = await axios.get(`https://sailorswaveadmins-backend.onrender.com/candidates`)
      const users = usedata.data;
      const filteredUsers = users.find((user) => user.applicationId == param.applicationNo);
      setUser(filteredUsers)
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
                <h2 style={{ letterSpacing: '20px', fontSize: '80px' }}>LOIDS</h2>
                <div className="fw-medium ms-5">-- Marine Services PVT LTD --</div>
              </div>
            </div>
            <hr />
            <div className="Body my-5 px-5 mx-4">
              <div>
                <div className="text-center h2 mt-1 mb-5 ">INTERVIEW INVITATION</div>
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
                    You are welcome to attend an interview at our office on <strong>{user?.admitcard?.date}</strong> at any time between <strong>{user?.admitcard?.time}</strong>.
                  </p>
                  <p>
                    {/* If you have any queries, feel free to call me on <strong>9600630942</strong> and reach me at <strong>loidsmarineservicespvtltd@gmail.com</strong>. */}
                    If you have any queries, feel free to reach us at <strong>loidsmarineservicespvtltd@gmail.com</strong>.
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

            <div className="Foote my-5">
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
    </>
  );
}
