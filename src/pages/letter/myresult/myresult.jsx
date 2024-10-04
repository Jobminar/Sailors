import React, { useState } from "react";

const Myresult = () => {
  const [results] = useState([
    {
      ApplicationNO: "157894632878",
      SubmittedApplication: "21/06/24",
      ApplicationStatus: "Received",
      Admitcardstatus: "N/A",
      DownloadAdmitcard: "N/A",
      Interviewdate: "N/A",
      IntervieFeedback: "N/A",
      Interviewoutcome: "N/A",
      Comments: "N/A",
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
              <th>Interviewdate</th>
              <th>Intervie Feedback</th>
              <th>Interview outcome</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{result.ApplicationNO}</td>
                <td>{result.SubmittedApplication}</td>
                <td>{result.ApplicationStatus}</td>
                <td>{result.Admitcardstatus}</td>
                <td>{result.DownloadAdmitcard}</td>
                <td>{result.Interviewdate}</td>
                <td>{result.IntervieFeedback}</td>
                <td>{result.Interviewoutcome}</td>
                <td>{result.Comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Myresult;
