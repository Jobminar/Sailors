import { useEffect, useState } from "react";
import writingImage from "../../../assets/Images/admitcardimage.png";
import "./Myadmitcard.css";
import axios from "axios";
const Myadmitcard = () => {
  const [data, setdata] = useState([]);
  const handleViewDocument = (filename) => {
    const url = `http://127.0.0.1:7001/fileById/${filename}`;
    window.location.href = url;
};

  const Fetchdata = async () => {
    try {
      const user = await axios.get('http://127.0.0.1:7001/candidates')
      setdata(user.data)
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
        <div style={{ margin: '0px 30px' }} className="rotate">
          <div className="pb-3">
            <img src={writingImage} alt="imgicon" style={{ cursor: "pointer", fontSize: "24px" }} /><span style={{ color: '#303C6C', paddingLeft: "15px" }}>My Admit Cards</span>
          </div>
          <div>
            <table className="table table-bordered mt-4 border-dark">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Application No.</th>
                  <th>Submitted Application</th>
                  <th>Application Status</th>
                  <th>Admit card status</th>
                  <th>Download Admit card</th>
                  <th>Interview date</th>
                  <th>Click here</th>
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

export default Myadmitcard;
