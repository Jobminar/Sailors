import { useEffect, useState } from "react";
import myapplication from "../../../assets/Images/appLetterimage.png";
import "./ApplicationLetter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from 'moment'

const ApplicationLetter = () => {
  const [data, setuserdata] = useState({})
  const navigate = useNavigate('')
  const [cookies, setcookie, removecookie] = useCookies(["user"])
  const apiKey = process.env.REACT_APP_BASE_URL;
  
  const handleViewDocument = (filename) => {
    const url = `http://localhost:7000/fileById/${filename}`;
    window.location.href = url;
  };


  const Fetchdata = async () => {
    try {
      const alluser = await axios.get(`http://localhost:7000/candidates`)
      const user = alluser.data;
      const finduser = user.find((usernumber) => parseInt(usernumber.mobileNumber) === parseInt(cookies.user))
      console.log('dkfjlaskdflk',finduser)
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
        <div style={{ margin: '30px 0px', padding:'200px'  }}>
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
                    {/* <th>Interview Feedback</th> */}
                    <th>Selection Letter</th>
                    <th>Confirmation Letter</th>
                    {/* <th>Comments</th> */}
                  </tr>
                </thead>
                <tbody><tr>
                      <td>1</td>
                      <td>{data?.applicationId}</td>
                      <td>{moment(data?.updatedAt).format('YYYY-MM-DD')}</td>
                      <td>{data?.applicationstatus?.status}</td>
                      <td>{data?.admitcard?.status}</td>
                      <td onClick={() => navigate(`/interviewletterhead3`)}><button className="btn" >download</button></td>
                      <td>{data?.admitcard?.date || 'Not Checked'}</td>
                      {/* <td>{data?.interviewoutcome?.interviewFeedback}</td> */}
                      <td>{data?.selectionletter?.status}</td>
                      <td>{data?.confirmationletter?.status}</td>
                      {/* <td>{(data?.Commants? '' : 'No comments')}</td> */}
                    </tr>
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
