import { useEffect, useState } from "react";
import writingImage from "../../../assets/Images/Writingimage.png";
import lettericon from '../../../assets/Images/lettericon.png'
import "./SelectionLetter.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const SelectionLetter = () => {
  const [data, setdata] = useState([]);
  const [cookies, setcookie, removecookie] = useCookies(["user"])
  const apiKey = process.env.REACT_APP_BASE_URL

  const handleViewDocument = (filename) => {
    const url = `https://sailorswaveadmins-backend.onrender.com/fileById/${filename}`;
    window.location.href = url;
  }

  const Fetchdata = async () => {
    try {
      const alluser = await axios.get(`https://sailorswaveadmins-backend.onrender.com/candidates`)
      const user = alluser.data;
      const finduser = user.filter((usernumber) => parseInt(usernumber.mobileNumber) === cookies.user)
      setdata(finduser)
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
        <div style={{ margin: '150px 30px' }} className="rotate">
          <div className="pb-3">
            <img src={writingImage} alt="imgicon" style={{ cursor: "pointer", fontSize: "24px" }} /><span style={{ color: '#303C6C', paddingLeft: "15px" }}>Selection Letters</span>
          </div>
          <div>
            <table className="table table-bordered mt-4 border-dark ">
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
                  <th>Selection letter</th>
                  <th>Confirmation letter</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {data.map((result, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{result.applicationId}</td>
                    <td>Date</td>
                    <td>{result.applicationstatus.status}</td>
                    <td>{result.admitcard.status}</td>
                    <td onClick={() => handleViewDocument(result.passport)}><button className="btn" >{result?.downloadAdmitCard} download</button></td>
                    <td>{result.admitcard.date}</td>
                    <td>{result.interviewoutcome.interviewFeedback}</td>
                    <td>{result.selectionletter.status}</td>
                    <td>{result.confirmationletter.status}</td>
                    <td>{result.Commants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectionLetter;
