import { useEffect, useRef, useState } from "react";
import './documentsailorwave.css'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Documentsailorwave = () => {

    const [applicationData, setApplicationData] = useState([]);
    const [cookies, setcookie, removecookie] = useCookies(["user"]);
    const navigate = useNavigate('')

    const [file,  setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = async (e,num) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post(`http://localhost:7000/uploaddocument/${num}`, formData, {
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
        const url = `http://localhost:7000/fileById/${filename}`;
        window.location.href = url;
    };

    const Fetchdata = async () => {
        try {
          const alluser = await axios.get('http://localhost:7000/candidates')
          const user = alluser.data;
          const finduser = user.filter((usernumber) => parseInt(usernumber.mobileNumber) === cookies.user)
          setApplicationData(finduser)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        Fetchdata()
      }, [])

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
                                <th>Outcome</th>
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
                                        </td>
                                        <td >{val?.admitcard?.status}</td>
                                        <td onClick={() => navigate(`/interviewletterhead3`)}><button className="btn" >download</button></td>
                                        <td >{val?.admitcard?.date || 'Not Checked'}</td>
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
                                                <button className="btn btn-primary mt-2" onClick={(e)=>handleSubmit(e,val?.mobileNumber)}>
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
