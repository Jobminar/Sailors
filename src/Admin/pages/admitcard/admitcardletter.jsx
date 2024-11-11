import "./admitcardletter.css";
import lettericons from '../../../assets/Images/lettericon.png'
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Admitcardletterhead() {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [user, setUser] = useState({})
  const param = useParams()
  const apiKey = process.env.REACT_APP_BASE_URL

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
                <div className="text-center h2">INTERVIEW INVITATION</div>
                <div>
                  <div className="row">
                    <div className="col-4">Application No</div>
                    <div className="col">:<strong> LY {user?.applicationId}</strong></div>
                  </div>
                  <div className="row">
                    <div className="col-4">Name of Candidate</div>
                    <div className="col">:<strong> {user?.candidateName}</strong></div>
                  </div>
                  <div className="row">
                    <div className="col-4">Father Name</div>
                    <div className="col">:<strong> {user?.fatherName}</strong></div>
                  </div>
                  <div className="fw-medium my-3">Dear candidate,</div>
                  <p>
                    Your qualifications have impressed us, and we would like to have a discussion with you.
                  </p>
                  <p>
                    You are welcome to attend an interview at our office on <strong>{user?.admitcard?.date}</strong> at any time between <strong>{user?.admitcard?.time}</strong>.
                  </p>
                  <p>
                    If you have any queries, feel free to call me on <strong>9600630942</strong> and reach me at <strong>loidsmarineservicespvtltd@gmail.com</strong>.
                  </p>
                </div>
              </div>
              <div style={{ textIndent: '30px' }}>
                <div className="row my-3">
                  <div className="col-4">Interview Scheduled Date</div>
                  <div className="col">:<strong>{user?.admitcard?.date}</strong></div>
                </div>
                <div className="row">
                  <div className="col-4">Time</div>
                  <div className="col">:<strong> {user?.admitcard?.time}</strong></div>
                </div>
                <div className="row">
                  <div className="col-4">Venue Details</div>
                  <div className="col">:<strong> LOIDS MARINE SERVICES PVT LTD, KSK COMPLEX, 2nd Street, Ramanuja Nagar, Coimbatore, Tamilnadu - 641015</strong></div>
                </div>
                <div className="fw-medium mt-3">Interview Instructions</div>
                <ul>
                  <li>It is mandatory for candidates to carry their educational certificates and CVs.</li>
                  <li>Interview letters should be carried by candidates during the interview.</li>
                  <li>In the interview hall, there is a strict ban on cell phones, cameras, bags, and other unnecessary items.</li>
                </ul>
              </div>
            </div>

            <div className="Footer bg-secondary text-light">
              <div>
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
      </div>
    </>
  );
}
