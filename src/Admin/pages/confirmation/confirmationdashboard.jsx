
import { Link, useNavigate } from 'react-router-dom';
import filterimg from '../../assets/Images/filter.png'
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import axios from 'axios'
import moment from 'moment';

const Confirmationdashboard = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedAdmitCard, setSelectedAdmitCard] = useState('');
    const [SelectNumber,setSelectNumber] = useState(null)
    const [Conformationletter,setConformationletter] = useState('')
    const today = new Date().toISOString().split("T")[0];
    const [usersdata, setusersdata] = useState([])
    const [adminCookie,removeadminCookie] = useCookies(["user"]);
    const apiKey = process.env.REACT_APP_BASE_URL

    const fetchdata = async () => {
        try {
            const values = await axios.get(`http://localhost:7000/candidates`)
            setusersdata(values.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(usersdata.map((item) => item.applicationstatus, 'hello'))
    useEffect(() => {
        fetchdata();
    }, [])



    const filteredData = usersdata.filter((item) => {
        if (selectedDate && item.interviewDate !== selectedDate) {
            return false
        };
        if (selectedAdmitCard && (item.admitcard.status) !== selectedAdmitCard) {
            return false
        };
        if (Conformationletter && (item.applicationstatus ? 'Generated' : 'Not Generated') !== Conformationletter) {
            return false;
        }

        return true;
    });
    const rollNoClicked = (applicationNo) => {
        navigate(`/dashboardadmin/confirmationprofile/${applicationNo}`);
    };
    return (
        <div>

            <div className="container row pt-3">
                <div>
                    <Link className='bi-arrow-left btn btn-light m-3 px-3' to='/dashboardadmin/myapplication'></Link>
                </div>
                <div className="col-9" style={{ width: "100%" }}>
                    <div className="btn-group   mt-2 mb-5">
                        <button className="btn btn-light">
                            <img src={filterimg}></img>
                        </button>
                        <button className="btn btn-light">
                            Filter By
                        </button>
                        <button className="btn btn-light">
                            <input
                                className="form-control"
                                type="date"
                                value={selectedDate}
                                onChange={(e) => { setSelectedDate(e.target.value) }}
                                min="2024-10-12"
                                max={today}
                            />
                        </button>
                        <button className="btn btn-light">
                            <select className="form-select" value={selectedAdmitCard} onChange={(e) => { setSelectedAdmitCard(e.target.value) }}>
                                <option value="">Admit Card</option>
                                {
                                    [...new Set(usersdata.map(item => (item.admitcard.status)))].map(item => (
                                        <option value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </button>
                        <button className="btn btn-light">
                        <div className="d-flex">
                            <input
                                className="form-control"
                                placeholder="Number"
                                value={SelectNumber}
                                onChange={(e)=>setSelectNumber(e.target.value)}
                            />
                            <span className="bi bi-search" style={{ marginLeft: "-12%", alignContent: "center" }}></span>
                        </div>
                    </button>
                    </div>
                    <div className="table-responsive" >
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th className="no-wrap">Application No.</th>
                                    <th className="no-wrap">Application Status</th>
                                    <th>OfficerName</th>
                                    <th className="no-wrap">Admit Card</th>
                                    <th>InterviewDate</th>
                                    <th>OfficerName</th>
                                    <th className="no-wrap">Interview outcomme</th>
                                    <th>OfficerName</th>
                                    <th className="no-wrap">Selcection Letter</th>
                                    <th>OfficerName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index} onClick={() => rollNoClicked(item.applicationId)} style={{ cursor: 'pointer' }}>
                                        <td>{index + 1}</td>
                                        <td className="no-wrap">{item.candidateName}</td>
                                        <td>{item.applicationId}</td>
                                        <td style={{ cursor: 'pointer' }}>{item.applicationstatus.status}</td>
                                        <td className="no-wrap">{item.applicationstatus.OfficerName}</td> 
                                            {/* Admit Card */}
                                        <td className="no-wrap">{item.admitcard.status }</td>
                                        <td>{moment(item.admitcard.date).format('YYYY-MM-DD')}</td>
                                        <td className="no-wrap">{item.admitcard.OfficerName}</td>
                                            {/* Interview Outcome */}
                                        <td>{item.interviewoutcome.status}</td>
                                        <td className="no-wrap">{item.interviewoutcome.OfficerName}</td>
                                            {/* selection Letter updates */}
                                        <td>{item.selectionletter.status}</td>
                                        <td className="no-wrap">{item.selectionletter.OfficerName}</td>
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

export default Confirmationdashboard;
