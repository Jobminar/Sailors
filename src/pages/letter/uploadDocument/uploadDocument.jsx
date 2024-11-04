import React, { useState, useRef } from "react";

const UpladDocument = () => {
    const [documents, setdocument] = useState([])
    const fileInputRef = useRef(null);
    const letterInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };
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
                        <i
                            className="bi-cloud-arrow-up"
                            style={{ cursor: "pointer", fontSize: "24px" }}
                            onClick={handleLetterclick}
                        ></i>
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
                                <th>uploadDocuments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                documents.map((document, i) =>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{document.applicationNo}</td>
                                        <td>{document.submittedApplication}</td>
                                        <td>{document.applicationStatus}</td>
                                        <td>{document.admitCardStatus}</td>
                                        <td>{document.downloadAdmitCard}</td>
                                        <td>{document.interviewDate}</td>
                                        <td>{document.interviewFeedback}</td>
                                        <td>{document.selectionLetter}</td>
                                        <td>{document.confirmationLetter}</td>
                                        <td>
                                            <span className="me-2">Upload docx</span>
                                            <i
                                                className="bi bi-upload"
                                                style={{ cursor: "pointer", fontSize: "24px" }}
                                                onClick={handleClick}
                                            ></i>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                accept=".docx"
                                            />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div >
        </>
    )
}
export default UpladDocument;