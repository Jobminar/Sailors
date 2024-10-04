import { useState } from "react";
import writingImage from "../../../assets/Images/Writingimage.png";
import "./SelectionLetter.css";
const SelectionLetter = () => {
  const [data] = useState([
    {
      Slno: 1,
      ApplicationNo: "xxxxx",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Received",
      AdmitCardStatus: "N/A",
      DownloadAdmitCard: "N/A",
      InterviewDate: "N/A",
      InterviewFeedback: "N/A",
      SelectionLetter: "N/A",
      ConfirmationLetter: "N/A",
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
      InterviewFeedback: "N/A",
      SelectionLetter: "N/A",
      ConfirmationLetter: "N/A",
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
      InterviewFeedback: "N/A",
      SelectionLetter: "N/A",
      ConfirmationLetter: "N/A",
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
      InterviewFeedback: "N/A",
      SelectionLetter: "N/A",
      ConfirmationLetter: "N/A",
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
          <h4 className="heading-for-selection-letter">Selection Letters</h4>
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
                  <td>{result.ApplicationNo}</td>
                  <td>{result.SubmittedApplication}</td>
                  <td>{result.ApplicationStatus}</td>
                  <td>{result.AdmitCardStatus}</td>
                  <td>{result.DownloadAdmitCard}</td>
                  <td>{result.InterviewDate}</td>
                  <td>{result.InterviewFeedback}</td>
                  <td>{result.SelectionLetter}</td>
                  <td>{result.ConfirmationLetter}</td>
                  <td>{result.Commants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SelectionLetter;
