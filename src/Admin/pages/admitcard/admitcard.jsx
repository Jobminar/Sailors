import { useEffect, useState } from 'react';
import profile from '../../assets/Images/dp-dummy.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Profile from '../profile/profile';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';
import useUserById from '../../Hook/finduser/findalluser';

export function Admitcard() {
  const navigate = useNavigate();
  const param = useParams()
  const { user: admitcarddetails, loading, error } = useUserById(`https://sailorswaveadmins-backend.onrender.com/candidates`, param.applicationNo);
  const [time, settime] = useState('')
  const [date, setdate] = useState('')
  const [adminCookie, setadminCookie, removeadminCookie] = useCookies(["useradmin", "admin"]);
  const apiKey = process.env.REACT_APP_BASE_URL
  const [address, setAddress] = useState("");


  const btngenereteadmit = async (id) => {
    const applicationstatus = {
      Apstatus: admitcarddetails?.applicationstatus?.status,
      ApOfficerName: admitcarddetails?.applicationstatus?.OfficerName,

      admitcardstatus: 'Approved',
      admitcarddate: date,
      admitcardtime: time,
      admitcardofficer: adminCookie.admin || adminCookie.useradmin,

      interviewfeedback: admitcarddetails?.interviewoutcome?.interviewFeedback,
      interviewstatus: admitcarddetails?.interviewoutcome?.status,
      interviewAddresh: address,
      interviewofficer: admitcarddetails?.interviewoutcome?.OfficerName,

      // Update selection letter details
      selectionletterstatus: admitcarddetails?.selectionletter?.status,
      Totalamount: admitcarddetails?.selectionletter?.TAmount,
      initialamount: admitcarddetails?.selectionletter?.InitialAmount,
      deadlinedate: admitcarddetails?.selectionletter?.DeadlineDate,
      selectionletterofficer: admitcarddetails?.selectionletter?.OfficerName,

      // Update confirmation letter details
      confirmationletterstatus: admitcarddetails?.confirmationletter?.status,
      JoinDate: admitcarddetails?.confirmationletter?.JoiningDate,
      instalment2amt: admitcarddetails?.confirmationletter?.InstalmentAmount2,
      instalment3amt: admitcarddetails?.confirmationletter?.InstalmentAmount3,
      instalment2dat: admitcarddetails?.confirmationletter?.InstalmentDate2,
      instalment3dat: admitcarddetails?.confirmationletter?.InstalmentDate3,
      confirmationletterofficer: admitcarddetails?.confirmationletter?.status,
    }
    try {
      const response = await axios.patch(`https://sailorswaveadmins-backend.onrender.com/candidate/${id}`, applicationstatus);
      alert('response updated sucessfull')
      navigate(`/dashboardadmin/admitcardletter/${admitcarddetails.applicationId}`)
    } catch (error) {
      console.error(error);
      alert('response is not updating sucessfull')
    }
  };

  useEffect(() => {
    if(admitcarddetails){
      setdate(admitcarddetails?.admitcard?.date || '')
      settime(admitcarddetails?.admitcard?.time || '')
    }

  }, [admitcarddetails])

  return (
    <>
      <div className='container row'>
        <div>
          <Link className='bi-arrow-left btn btn-light my-3 px-3' to='/dashboardadmin/admitcarddashboard'></Link>
        </div>
        <div >
          <div className='fw-bold fs-5 '>About</div>

          <div className="ms-2 w-75 mt-3">
            <Profile applicantdetail={admitcarddetails} />

          </div>
          <div className='text-secondary mt-4'>
            <h5>Details of {admitcarddetails.candidateName}</h5>
            <dl>
              <div className='d-flex my-4   bg-light'>
                <dt className='mx-4 col-5 align-content-center'>Application No.</dt>
                <dd>{admitcarddetails.applicationId}</dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4 col-5 align-content-center'>Application status</dt>
                <dd>{admitcarddetails?.applicationstatus?.status}</dd>
              </div>
              <div className='d-flex my-4   bg-light '>
                <dt className='mx-4 col-5 align-content-center'>Date of applied</dt>
                <dd>{moment(admitcarddetails.createdAt).format('YYYY-MM-DD')}</dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4 col-5 align-content-center '>Date of Interview</dt>
                <dd><input className='form-control' type='date' value={moment(date).format('YYYY-MM-DD')} onChange={(e) => setdate(e.target.value)}></input></dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4 col-5 align-content-center'>Time of Interview</dt>
                <dd className='d-flex align-items-center'><input type='time' className='form-control' value={moment(time, "HH:mm").format("hh:mm")} onChange={(e) => settime(e.target.value)}></input></dd>
              </div>
              <div className=' bg-light my-4 p-2 rounded-1'>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="0"
                    checked={address === "Loids marine services pvt ltd, 6-1, Jothi Nagar, 2nd Street, Ramanuja Nagar, Coimbatore, Tamil Nadu - 641015 Phone. 96006-30942"}
                    onChange={() => setAddress('Loids marine services pvt ltd, 6-1, Jothi Nagar, 2nd Street, Ramanuja Nagar, Coimbatore, Tamil Nadu - 641015 Phone. 96006-30942')}
                    name="addreshOne"
                  />
                  <label className="form-check-label">Branch 1: 6-1, Jothi Nagar, 2nd Street, Ramanuja Nagar, Coimbatore, Tamil Nadu - 641015 Phone. 96006-30942

                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="1"
                    checked={address === "Loids marine services pvt ltd,508, 5th Floor, Prajay Princeton Towers, Saroornagar, Ib Nagar, Hyderabad, Telangana - 508247 Phone. 76739-82065"}
                    onChange={() => setAddress('Loids marine services pvt ltd,508, 5th Floor, Prajay Princeton Towers, Saroornagar, Ib Nagar, Hyderabad, Telangana - 508247 Phone. 76739-82065')}
                    name="addreshTwo"
                  />
                  <label className="form-check-label">Branch 2: 508, 5th Floor, Prajay Princeton Towers, Saroornagar, Ib Nagar, Hyderabad, Telangana - 508247Phone. 76739-82065
                  </label>
                </div>
              </div>

            </dl>
          </div>
          <div className='text-center'>
            <button
              className={`btn text-light py-3 ${(admitcarddetails?.applicationstatus?.status === 'Approved') ? 'd-inline' : 'd-none'}`}
              style={{ width: "40%", backgroundColor: "#1995cc" }}
              onClick={() => btngenereteadmit(admitcarddetails.applicationId)}
            >
              Generate Admit Card
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
