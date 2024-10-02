import { useState } from "react";
import writingImage from "../../../assets/Images/Writingimage.png";
import "./SelectionLetter.css";
const SelectionLetter = () => {
  const [data] = useState([
    {
      slNo: 1,
      apNo: 1,
      subAppDate: "21/06/24",
      appStatus: "Received",
      ACS: "N/A",
      DAC: "N/A",
      IDate: "N/A",
      Ifeedback: "N/A",
      Sletter: "N/A",
      CLetter: "N/A",
      Commants: "NIL",
    },
    {
      slNo: 1,
      apNo: 1,
      subAppDate: "21/06/24",
      appStatus: "Rejected",
      ACS: "N/A",
      DAC: "N/A",
      IDate: "N/A",
      Ifeedback: "N/A",
      Sletter: "N/A",
      CLetter: "N/A",
      Commants: "NIL",
    },
    {
      slNo: 1,
      apNo: 1,
      subAppDate: "21/06/24",
      appStatus: "Approved",
      ACS: "N/A",
      DAC: "N/A",
      IDate: "N/A",
      Ifeedback: "N/A",
      Sletter: "N/A",
      CLetter: "N/A",
      Commants: "NIL",
    },
    {
      slNo: 1,
      apNo: 1,
      subAppDate: "21/06/24",
      appStatus: "Selected",
      ACS: "N/A",
      DAC: "N/A",
      IDate: "N/A",
      Ifeedback: "N/A",
      Sletter: "N/A",
      CLetter: "N/A",
      Commants: "NIL",
    },
  ]);

  const getRow = (row) => {
    return (
      <>
        <tr>
          <th>{row.slNo}</th>
          <th>{row.apNo}</th>
          <th>{row.subAppDate}</th>
          <th>{row.appStatus}</th>
          <th>{row.ACS}</th>
          <th>{row.DAC}</th>
          <th>{row.IDate}</th>
          <th>{row.Ifeedback}</th>
          <th>{row.Sletter}</th>
          <th>{row.CLetter}</th>
          <th>{row.Commants}</th>
        </tr>
      </>
    );
  };

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
        <div className="table-container">
          <table class="table table-bordered border-dark main-table">
            <thead>
              <tr className="first-row">
                <th scope="col">S.no</th>
                <th scope="col">Application No.</th>
                <th scope="col">Submitted Application</th>
                <th scope="col">Application Status</th>
                <th scope="col">Admit card status.</th>
                <th scope="col">Download Admit card</th>
                <th scope="col">Interview date</th>
                <th scope="col">Interview Feedback</th>
                <th scope="col">Selection letter</th>
                <th scope="col">Confirmation letter</th>
                <th scope="col">Commants</th>
              </tr>
            </thead>
            <tbody>{data.map((eachItem) => getRow(eachItem))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SelectionLetter;
