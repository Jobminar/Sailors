import { useEffect, useRef, useState } from "react";
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

    const Fetchdata = async()=>{
        try{
          const user = await axios.get('http://127.0.0.1:7001/candidates')
          setApplicationData(user.data)
        }catch(error){
          console.log(error)
        }
      }
      useEffect(()=>{
        Fetchdata()
      },[])

    const [file,  setFile] = useState(null);
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

    const handleViewDocument = (filename) => {
        const url = `http://127.0.0.1:7001/fileById/${filename}`;
        window.location.href = url;
    };

    return (
        <>
            <div style={{ margin: '200px 30px' }} className="rotate">
                <div>
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
                                        <td >{val?.applicationId}</td>
                                        <td >Date</td>
                                        <td >
                                            {val?.applicationstatus?.status}
                                            <span className="bi bi-check-circle-fill text-success ms-4"></span>
                                        </td>
                                        <td >{val?.admitcard?.status}</td>
                                        <td onClick={() => handleViewDocument(val.passport)} // Pass the filename
                                        ><button className="btn" >{val?.downloadAdmitCard} download</button></td>
                                        <td >{val?.admitcard?.date}</td>
                                        <td >{val?.interviewoutcome?.interviewFeedback}</td>
                                        <td >{val?.interviewoutcome?.interviewFeedback}</td>
                                        <td >{val?.comments} No Comments</td>
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
