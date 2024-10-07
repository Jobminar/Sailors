import React, { useState, useRef } from "react";
import imgicons from '../../../assets/Images/Writingimage.png'

const ConfirmationLetter = () => {
    const [confirmLetters, setConfirmLetter] = useState([
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
            comments: "N/A"
        }
    ])
    
    const letterInputRef = useRef(null);

    const handleLetterclick = () => {
        letterInputRef.current.click();
    };

    const handleletterchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };
    return (
        <>
            <div style={{ margin: '150px 30px' }}>
                <div className=" container">
                    <div>
                        <img src={imgicons} alt="imgicon" style={{ cursor: "pointer", fontSize: "24px" }}
                            onClick={handleLetterclick} />
                        <input
                            type="file"
                            ref={letterInputRef}
                            onChange={handleletterchange}
                            style={{ display: "none" }}
                            accept=".docx"
                        /><span style={{ color: '#303C6C', paddingLeft: "15px" }}>Selection Letters</span>
                    </div>
                    <table className="table table-bordered mt-4" >
                        <thead>
                            <tr>
                                <th>Si.no</th>
                                <th>Application no</th>
                                <th>Submitted Application</th>
                                <th>Application Status</th>
                                <th>Admit card status</th>
                                <th>Download  Admit card</th>
                                <th>Interview date</th>
                                <th>Interview Feedback</th>
                                <th>Selection Letter</th>
                                <th>Confirmation Letter</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                confirmLetters.map((confirmLetter, i) =>
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
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
export default ConfirmationLetter
