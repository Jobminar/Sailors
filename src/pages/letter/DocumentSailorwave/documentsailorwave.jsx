import { useRef, useState } from "react";
import './documentsailorwave.css'
import axios from "axios";

const Documentsailorwave = () => {

    const [applicationData, setApplicationData] = useState([
        {
            applicationNumber: "xxxxxxxx",
            submittedApplication: "21/06/24",
            applicationStatus: "Approved",
            admitCardStatus: "Generated",
            downloadAdmitCard: "Download",
            interviewDate: "xx-xx-xxxx",
            interviewFeedback: "Selected",
            outcome: "Selected",
            comments: "Documents shared",
            uploadDocuments: "Upload"
        }
    ]);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('http://localhost:2024/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setFile(null);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file');
        }
    };

    const handleViewDocument = async (filename) => {
        try {
            const response = await axios.get(`http://localhost:2024/file/${filename}`, {
                responseType: 'blob' 
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); 
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    return (
        <>
            <div style={{ margin: '200px 30px' }}>
                <div className="container">
                    <table className="table table-bordered ">
                        <thead>
                            <tr className="documentsailorwavehead" >
                                <th>S.no</th>
                                <th>Application No.</th>
                                <th>Submitted Application</th>
                                <th>Application Status</th>
                                <th>Admit card status</th>
                                <th>Download Admit card </th>
                                <th>Interview date</th>
                                <th>Interview Feedback</th>
                                <th>Outcome</th>
                                <th>Comments</th>
                                <th>Upload documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applicationData.map((val, index) =>
                                    <tr className="text-center documentsailorwavebody" key={index}>
                                        <td >{index + 1}</td>
                                        <td >{val.applicationNumber}</td>
                                        <td >{val.submittedApplication}</td>
                                        <td >
                                            {val.applicationStatus}
                                            <span className="bi bi-check-circle-fill text-success ms-4"></span>
                                        </td>
                                        <td >{val.admitCardStatus}</td>
                                        <td

                                            onClick={() => handleViewDocument("d5446928d824751baa25ad6dd045ec57.png")} // Pass the filename
                                        ><button className="btn " >{val.downloadAdmitCard}</button></td>
                                        <td >{val.interviewDate}</td>
                                        <td >{val.interviewFeedback}</td>
                                        <td >{val.outcome}</td>
                                        <td >{val.comments}</td>
                                        <td>
                                            {val.uploadDocuments}
                                            <span
                                                className="bi bi-upload ms-3"
                                                style={{ cursor: "pointer", fontSize: "24px" }}
                                                onClick={handleClick}
                                            ></span>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                accept=".docx, .jpg, .jpeg, .png"
                                            />
                                            {file && (
                                                <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                                                    Upload File
                                                </button>
                                            )}
                                        </td>

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

export default Documentsailorwave;
