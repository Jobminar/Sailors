import React, { useState, useRef, useEffect } from "react";
import imgicons from '../../../assets/Images/Writingimage.png'
import './confirmationletter.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmationLetter = () => {
    const [confirmLetters, setConfirmLetter] = useState([])
    const letterInputRef = useRef(null);
    const navigate = useNavigate('');
    const apiKey = process.env.BASE_URL

    const Fetchdata = async () => {
        try {
            const user = await axios.get(`${apiKey}/candidates`)
            setConfirmLetter(user.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Fetchdata()
    }, [])


    const handleLetterclick = () => {
        letterInputRef.current.click();
    };

    const handleletterchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };

    const handleViewDocument = (filename) => {
        const url = `${apiKey}}/fileById/${filename}`;
        window.location.href = url;
    };

    return (
        <>
            <div style={{ margin: '150px 30px' }} className="Maindiv">
                <div className="container">
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
                                        <td>{confirmLetter.applicationId}</td>
                                        <td>date</td>
                                        <td>{confirmLetter.applicationstatus.status}</td>
                                        <td>{confirmLetter.admitcard.status}</td>
                                        <td onClick={() => navigate(`/confirmationletterhead/${confirmLetter.applicationId}`)}><button className="btn" >{confirmLetter?.downloadAdmitCard} download</button></td>
                                        <td>{confirmLetter.admitcard.date}</td>
                                        <td>{confirmLetter.interviewoutcome.interviewFeedback}</td>
                                        <td>{confirmLetter.selectionletter.status}</td>
                                        <td>{confirmLetter.confirmationletter.status}</td>
                                        <td>{(confirmLetter.Commants ? '' : 'No comments')}</td>
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
