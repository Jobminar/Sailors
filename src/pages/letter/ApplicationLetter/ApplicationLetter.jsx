import { useEffect, useState } from "react";
import myapplication from "../../../assets/Images/appLetterimage.png";
import "./ApplicationLetter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from 'moment'

const ApplicationLetter = () => {
  const [data, setuserdata] = useState([])
  const navigate = useNavigate('')
  const [cookies, setcookie, removecookie] = useCookies(["user"])
  const apiKey = process.env.BASE_URL;
  
  const handleViewDocument = (filename) => {
    const url = `http://127.0.0.1:7001/fileById/${filename}`;
    window.location.href = url;
  };


  const Fetchdata = async () => {
    try {
      const alluser = await axios.get(`${apiKey}/candidates`)
      const user = alluser.data;
      const finduser = user.filter((usernumber) => parseInt(usernumber.mobileNumber) === cookies.user)
      // console.log(cookies.user,'finlter')
      setuserdata(finduser)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    Fetchdata()
  }, [])

  return (
    <>
      <section>
        <div style={{ margin: '30px 30px', padding:'200px',overflow:'hidden'  }}>
          <div className="container rotate">
            <div className="pb-3">
              <img src={myapplication} alt="imgicon" style={{ cursor: "pointer", fontSize: "24px" }} /><span style={{ color: '#303C6C', paddingLeft: "15px" }}>Application Letters</span>
            </div>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Application No.</th>
                    <th>Submitted Application</th>
                    <th>Application Status</th>
                    <th>Admit card status</th>
                    <th>Download Admit card</th>
                    <th>Interview date</th>
                    <th>Interview Feedback</th>
                    <th>Selection Letter</th>
                    <th>Confirmation Letter</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((confirmLetter, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{confirmLetter.applicationId}</td>
                      <td>{moment(confirmLetter.updatedAt).format('YYYY-MM-DD')}</td>
                      <td>{confirmLetter.applicationstatus.status}</td>
                      <td>{confirmLetter.admitcard.status}</td>
                      <td onClick={() => navigate(`/interviewletterhead3`)}><button className="btn" >download</button></td>
                      <td>{confirmLetter.admitcard.date}</td>
                      <td>{confirmLetter.interviewoutcome.interviewFeedback}</td>
                      <td>{confirmLetter.selectionletter.status}</td>
                      <td>{confirmLetter.confirmationletter.status}</td>
                      <td>{(confirmLetter.Commants ? '' : 'No comments')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationLetter;
