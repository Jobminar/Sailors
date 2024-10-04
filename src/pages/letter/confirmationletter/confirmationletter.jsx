import React, { useState } from "react";

const ConfirmationLetter = () => {
  const [confirmLetters] = useState([
    {
      serialNo: "01",
      applicationNo: "xxxxxxxxxx",
      submittedApplication: "21/06/24",
      applicationStatus: "Received",
      admitCardStatus: "N/A",
      downloadAdmitCard: "N/A",
      interviewDate: "N/A",
      interviewFeedback: "N/A",
      selectionLetter: "N/A",
      confirmationLetter: "N/A",
      comments: "N/A",
    },
  ]);

  return (
    <>
      <div style={{ margin: "200px 30px" }}>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Si.no</th>
              <th>Application no</th>
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
            {confirmLetters.map((confirmLetter, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{confirmLetter.applicationNo}</td>
                <td>{confirmLetter.submittedApplication}</td>
                <td>{confirmLetter.applicationStatus}</td>
                <td>{confirmLetter.admitCardStatus}</td>
                <td>{confirmLetter.downloadAdmitCard}</td>
                <td>{confirmLetter.interviewDate}</td>
                <td>{confirmLetter.interviewFeedback}</td>
                <td>{confirmLetter.selectionLetter}</td>
                <td>{confirmLetter.confirmationLetter}</td>
                <td>{confirmLetter.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ConfirmationLetter;
