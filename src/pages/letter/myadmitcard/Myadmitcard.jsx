import { useState } from "react";
import writingImage from "../../../assets/Images/admitcardimage.png";
import "./Myadmitcard.css";
const Myadmitcard = () => {
  const [data] = useState([
    {
      Slno: 1,
      ApplicationNo: "xxxxx",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Received",
      AdmitCardStatus: "N/A",
      DownloadAdmitCard: "N/A",
      InterviewDate: "N/A",
      Commants: "NIL",
    },
    {
      Slno: 1,
      ApplicationNo: "xxxxx",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Approved",
      AdmitCardStatus: "N/A",
      DownloadAdmitCard: "N/A",
      InterviewDate: "N/A",
      Commants: "NIL",
    },
    {
      Slno: 1,
      ApplicationNo: "xxxxx",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Rejected",
      AdmitCardStatus: "N/A",
      DownloadAdmitCard: "N/A",
      InterviewDate: "N/A",
      Commants: "NIL",
    },
    {
      Slno: 1,
      ApplicationNo: "xxxxx",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Approved",
      AdmitCardStatus: "N/A",
      DownloadAdmitCard: "N/A",
      InterviewDate: "N/A",
      Commants: "NIL",
    },
  ]);

  return (
    <>
      <section>
        <div className="container-for-selection-letter">
          <img
            src={writingImage}
            alt="selection-letter-image"
            className="selection-letter-image"
          />
          <h4 className="heading-for-selection-letter">My Admit Cards</h4>
        </div>
        <div>
          <table className="table table-bordered mt-4 border-dark table-container">
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
                  <td>{confirmLetter.ApplicationNo}</td>
                  <td>{confirmLetter.SubmittedApplication}</td>
                  <td>{confirmLetter.ApplicationStatus}</td>
                  <td>{confirmLetter.AdmitCardStatus}</td>
                  <td>{confirmLetter.DownloadAdmitCard}</td>
                  <td>{confirmLetter.InterviewDate}</td>

                  <td>{confirmLetter.Commants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Myadmitcard;
