import React, { useEffect, useState } from "react";
import './myresult.css'
import axios from "axios";
import { useCookies } from "react-cookie";

const Myresult = () => {
  const [data, setuserdata] = useState([]);
  const [cookies,setcookie,removecookie]=useCookies(["user"])
  const apiKey = process.env.REACT_APP_BASE_URL

  const handleViewDocument = (filename) => {
    const url = `http://localhost:7000/fileById/${filename}`;
    window.location.href = url;
};

  const Fetchdata = async () => {
    try {
      const alluser = await axios.get(`http://localhost:7000/candidates`)
      const user = alluser.data;
      const finduser = user.filter((usernumber) => parseInt(usernumber.mobileNumber) === cookies.user)
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
      <div style={{ margin: "200px 30px" }} className="Maindiv">
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Si.no</th>
                <th>Application no</th>
                <th>Submitted Application</th>
                <th>Application Status</th>
                <th>Admit card status</th>
                <th>Download Admit card</th>
                <th>Interviewdate</th>
                <th>Intervie Feedback</th>
                <th>Interview outcome</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {data.map((result, i) => (
                <tr>
                    <td>{i + 1}</td>
                    <td>{result?.applicationId}</td>
                    <td>date</td>
                    <td>{result?.applicationstatus?.status}</td>
                    <td>{result?.admitcard?.status}</td>
                    <td onClick={() => handleViewDocument(result?.passport)} // Pass the filename
                    ><button className="btn" >{result?.downloadAdmitCard} download</button></td>
                    <td>{result?.admitcard.date}</td>
                    <td>{result?.interviewoutcome.interviewFeedback}</td>
                    <td>{(result?.Commants ? '' : 'No comments')}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Myresult;
