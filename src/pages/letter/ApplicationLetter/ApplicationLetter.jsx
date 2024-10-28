import { useEffect, useState } from "react";
import myapplication from "../../../assets/Images/appLetterimage.png";
import "./ApplicationLetter.css";
import axios from "axios";
const ApplicationLetter = () => {
  const [data, setuserdata] = useState([])

  const handleViewDocument = (filename) => {
    const url = `http://127.0.0.1:7001/fileById/${filename}`;
    window.location.href = url;
};


  const Fetchdata = async () => {
    try {
      const user = await axios.get('http://127.0.0.1:7001/candidates')
      setuserdata(user.data)
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
            <img src={myapplication} alt="imgicon" style={{ cursor: "pointer", fontSize: "24px" }} /><span style={{ color: '#303C6C', paddingLeft: "15px" }}>Application Letters</span>
          </div>
          <div>
            <table className="table table-bordered border-dark">
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
                    <td>date</td>
                    <td>{confirmLetter.applicationstatus.status}</td>
                    <td>{confirmLetter.admitcard.status}</td>
                    <td onClick={() => handleViewDocument(confirmLetter.passport)} // Pass the filename
                    ><button className="btn" >{confirmLetter?.downloadAdmitCard} download</button></td>
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
      </section>
    </>
  );
};

export default ApplicationLetter;
