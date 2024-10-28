import React, { useEffect, useState } from "react";
import './myresult.css'
import axios from "axios";

const Myresult = () => {
  const [data, setuserdata] = useState([]);

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
