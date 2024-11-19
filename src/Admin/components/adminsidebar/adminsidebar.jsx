import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './adminsidebar.css'
import DashboardImage from '../../assets/Images/Dashboard.png'
import { useCookies } from "react-cookie";
import axios from "axios";

export function Adminsidebar({ selectedItem, setSelectedItem }) {
    const navigate = useNavigate();
    const [adminCookie, setcookie, removeCookie] = useCookies(["useradmin", "admin"]);
    const [adminData, setAdminData] = useState({});

    const handleItemClick = useCallback((e) => {
        const newValue = e.target.getAttribute('value');
        console.log(newValue, 'check only name')
        if (newValue == "dashboardadmin") {
            navigate('/dashboardadmin')
        } else {
            navigate(`/dashboardadmin/${newValue}`);
        }
        setSelectedItem(newValue);

    }, [navigate, setSelectedItem]);
    const handleItemsClick = useCallback(async (key) => {
        let newValue = ""; 
        switch (key) {
            case "MyApplication":
                newValue = 'MyApplication';
                break;
            case "AdmitCard":
                newValue = 'admitCarddashboard';
                break;
            case "InterviewFeedback":
                newValue = 'interviewSchedule';
                break;
            case "SelectionLetter":
                newValue = 'SelectionLetter';
                break;
            case "ConfirmationLetter":
                newValue = 'confirmationdashboard';
                break;
            case "Financials":
                newValue = 'Financials';
                break;
            default:
                console.log("Unknown key:", key);
                return; // Exit if the key doesn't match any case
        }
    
        try {
            // Navigate based on newValue
            if (newValue === "dashboardadmin") {
                navigate('/dashboardadmin');
            } else {
                navigate(`/dashboardadmin/${newValue}`);
            }
            if(newValue === 'Financials'){
                navigate('/dashboardadmin/MyApplication')
            }
            setSelectedItem(newValue);
        } catch (error) {
            console.log(error);
        }
    }, [navigate, setSelectedItem]); 

    function getItemStyle(item) {
        return item === selectedItem ? { backgroundColor: '#F97D3D', color: 'white' } : {};
    }

    const Getadmin = async () => {
        if (adminCookie.admin) {
            try {
                const response = await axios.get(`http://localhost:7000/subadmin/${adminCookie.admin}`);
                setAdminData(response.data)
            } catch (error) {

            }
        }
        if (adminCookie.useradmin) {

        }
    }

    useEffect(() => {
        Getadmin()
    }, [adminCookie.useradmin, adminCookie.admin])

    return (
        <div className="col-2">
            <div className="admitcard-container1">
                {adminData?.checklist &&
                    Object.entries(adminData.checklist)
                        .filter(([key, value]) => value === true) // Filter only true values
                        .map(([key]) => (
                            <h1
                                className="list-heading p-3 my-3 border border-1"
                                key={key}
                                value="myapplication"
                                onClick={() => handleItemsClick(key)}
                                style={getItemStyle("myapplication")}
                            >{key}
                            </h1>
                        ))}
            </div>
            <div className={`admitcard-container1 ${(adminCookie.useradmin ? 'd-block' : 'd-none')} `}>
                <h1
                    className="list-heading p-3 my-3"
                    value="myapplication"
                    onClick={handleItemClick}
                    style={getItemStyle("myapplication")}
                ><span className="bi bi-person-fill fs-4 mx-3"></span>My Applications
                </h1>

                <h1
                    className="list-heading p-3 my-3"
                    value="admitcarddashboard"
                    onClick={handleItemClick}
                    style={getItemStyle("admitcarddashboard")}
                ><span className="bi bi-person-vcard-fill fs-4 mx-3"></span>Admit Card
                </h1>

                <h1
                    className="list-heading p-3 my-3"
                    value="interviewSchedule"
                    onClick={handleItemClick}
                    style={getItemStyle("interviewSchedule")}
                ><span className="bi bi-chat-square-text-fill fs-4 mx-3"></span>Interview Feedback
                </h1>

                <h1
                    className="list-heading p-3 my-3"
                    value="selectionletter"
                    onClick={handleItemClick}
                    style={getItemStyle("selectionletter")}
                >
                    <span className="bi bi-envelope-check fs-4 mx-3"></span> Selection letter
                </h1>

                <h1
                    className="list-heading p-3 my-3"
                    value="confirmationdashboard"
                    onClick={handleItemClick}
                    style={getItemStyle("confirmationdashboard")}
                >
                    <span className="bi bi-envelope-open-fill fs-4 mx-3"></span> Confirmation letter
                </h1>

                <h1
                    className="list-heading p-3 my-3"
                    value="enquires"
                    onClick={handleItemClick}
                    style={getItemStyle("enquires")}
                >
                    <span className="bi bi-menu-up fs-4 mx-3"></span> Enquires
                </h1>
                <h1
                    className="list-heading p-3 my-3"
                    value="subadmin"
                    onClick={handleItemClick}
                    style={getItemStyle("addsubadmin")}
                >
                    <span className="bi bi-people-fill fs-4 mx-3"></span> Sub Admin
                </h1>
            </div>
        </div>
    );
}
