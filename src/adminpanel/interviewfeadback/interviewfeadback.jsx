import logoImage from "../../assets/Images/logo.png"
import DashboardImage from "../../assets/Images/Dashboard.png"
import dpdummy from '../../assets/Images/dp-dummy.png'
import filterimg from '../../assets/Images/filter.png'
import { useState } from "react"
import './interviewfeadback.css'
const InterviewSchedule = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');///application status
    const [selectedAdmitCard, setSelectedAdmitCard] = useState('');
    const [selectNumber, setSelectNumber] = useState('')
    const fakeData = [
        { sno: 1, applicationNo: '110009997609', status: 'Approved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '27/06/24' },
        { sno: 2, applicationNo: '110009997611', status: 'NotApproved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '28/06/24' },
        { sno: 3, applicationNo: '110009997612', status: 'Approved', admitCard: 'Generated', download: 'Download', interviewDate: '27/06/24' },
        { sno: 4, applicationNo: '110009997613', status: 'NotApproved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '29/06/24' },
        { sno: 5, applicationNo: '110009997614', status: 'NotApproved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '1/07/24' },
        { sno: 6, applicationNo: '110009997690', status: 'Approved', admitCard: 'Generated', download: 'Download', interviewDate: '28/06/24' },
        { sno: 7, applicationNo: '110009997615', status: 'Approved', admitCard: 'Generated', download: 'Download', interviewDate: '29/06/24' },
        { sno: 8, applicationNo: '110009997610', status: 'NotApproved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '30/06/24' },
        { sno: 9, applicationNo: '110009997616', status: 'Approved', admitCard: 'NotGenerated', download: 'Download', interviewDate: '28/06/24' },
    ];
    const filteredData = fakeData.filter((item) => {
        if (selectedDate && item.interviewDate !== selectedDate) {
            return false
        };
        if (selectedStatus && item.status !== selectedStatus) {
            return false
        };
        if (selectedAdmitCard && item.admitCard !== selectedAdmitCard) {
            return false
        };
        if (selectNumber && item.applicationNo !== selectNumber) {
            return false;
        }

        return true;
    });

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleAdmitCardChange = (e) => {
        setSelectedAdmitCard(e.target.value);
    };
    const handleNumberChange = (e) => {
        setSelectNumber(e.target.value);
    }
    return (
        <div>
            <div className="container row">
                <div className="col-3 p-3 d-flex justify-content-between align-items-center" >
                    <div>
                        <i class="bi bi-list fw-bold fs-4 "></i>
                    </div>
                    <img
                        src={logoImage}
                        alt="logo-image"
                        className="logo-image-admit-card w-50"
                    />
                </div>
                <div className="col-9 text-end">
                    <button className="btn btn-light border border-2 me-4" >
                        <span className="bi bi-bell-fill text-warning position-relative " ><span className="position-absolute badge  " style={{ backgroundColor: "#F97D3D", marginTop: "-15px" }}>2</span></span>
                    </button>
                    <span >
                        <img src={dpdummy} style={{ width: "3%" }} className="bg-dark rounded-circle"></img>
                    </span>
                </div>
            </div>
            <div className="container row pt-3">

                <div className="col-3">
                    <div className="admitcard-container1">
                        <h1 className="list-heading mb-4">
                            <img src={DashboardImage} alt="app-image" className="mx-3" /> Dash
                            board
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-person-fill fs-4 mx-3"></span>
                            My Applications
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-person-vcard-fill fs-4 mx-3"></span> Admit
                            card
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-chat-square-text-fill fs-4 mx-3 "></span>
                            Interview feedback
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-envelope-check fs-4 mx-3"></span>
                            Selection letter
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-envelope-open-fill fs-4 mx-3"></span> Admit
                            Confirmation letter
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-menu-up fs-4 mx-3"></span>
                            Enquires
                        </h1>
                        <h1 className="list-heading mb-4">
                            <span className="bi bi-people-fill fs-4 mx-3"></span>
                            Sub Admin
                        </h1>
                    </div>
                </div>
                <div className="col-9">
                    <div className="btn-group   mt-2 mb-5">
                        <button className="btn btn-light">
                            <img src={filterimg}></img>
                        </button>
                        <button className="btn btn-light">
                            Filter By
                        </button>
                        <button className="btn btn-light">
                            <select className="form-select" value={selectedDate} onChange={handleDateChange}>
                                <option value="">Select Date</option>
                                <option value="27/06/24">27/06/24</option>
                                <option value="28/06/24">28/06/24</option>
                                <option value="29/06/24">29/06/24</option>
                                <option value="30/06/24">30/06/24</option>
                                <option value="01/07/24">01/07/24</option>
                            </select>
                        </button>
                        <button className="btn btn-light">
                            <select className="form-select" value={selectedStatus} onChange={handleStatusChange}>
                                <option value="">Application Status</option>
                                <option value="Approved">Approved</option>
                                <option value="NotApproved">NotApproved</option>
                            </select>
                        </button>
                        <button className="btn btn-light">
                            <select className="form-select" value={selectedAdmitCard} onChange={handleAdmitCardChange}>
                                <option value="">Select Admit Card</option>
                                <option value="Generated">Generated</option>
                                <option value="NotGenerated">NotGenerated</option>
                            </select>
                        </button>
                        <button className="btn btn-light">
                            <div className="d-flex">
                                <input className="form-control" placeholder="search with Number" vlaue={selectNumber} onChange={handleNumberChange}>

                                </input>
                                <span className="bi bi-search" style={{ marginLeft: "-12%", alignContent: "center" }}></span>

                            </div>
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>S.no</th>
                                    <th>Application No.</th>
                                    <th>Application Status</th>
                                    <th>Admit Card</th>
                                    <th>Download Admit Card</th>
                                    <th>Interview Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.sno}</td>
                                        <td>{item.applicationNo}</td>
                                        <td>{item.status}</td>
                                        <td>{item.admitCard}</td>
                                        <td>
                                            <a href="#" className="btn btn-link">{item.download}</a>
                                        </td>
                                        <td>{item.interviewDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InterviewSchedule;
