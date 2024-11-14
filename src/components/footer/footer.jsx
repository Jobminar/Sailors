import logo from "../../assets/Images/logo.png"
import playstoreimg from "../../assets/Images/playstore.jpg"
import iosstoreimg from "../../assets/Images/iosstore.jpg"
import telegramlogo from '../../assets/Images/telegramlogo.png'
import './footer.css'
import { useNavigate } from 'react-router-dom'

export function Footer() {
    const navigate = useNavigate('');
    return (
        <>
            <footer >
                <div style={{ marginTop: "2%" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div>
                                <span className="bi bi-envelope text-secondary pe-2"></span>
                                <span>Subscribe to Newsletter</span>
                            </div>
                            <div className="d-flex mt-3 ">
                                <input className="form-control me-2 " placeholder="Enter your name"></input>
                                <input className="form-control me-2" placeholder="Enter your e-mail "></input>
                                <button className=" btn" style={{ backgroundColor: "#D96009" }}> <img src={telegramlogo} ></img></button>
                            </div>
                        </div>
                        <div className="image-container">
                            <img id="logo" src={logo} className="py-2" style={{ width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
                        <div style={{ width: "30%" }}>
                            <h5>Loids Marine Services Pvt Ltd</h5>
                            <div className="text-justify" >
                                Our team comprises seasoned professionals with extensive experience in the maritime industry. We bring deep insights and practical knowledge to every project we undertake.
                            </div>
                        </div>
                        <div className="footeritem">
                            <div onClick={() => navigate('/about')}>About us</div>
                            <div onClick={() => navigate('/services')}>Reviews</div>
                            <div onClick={() => navigate('/contact')}>Contact Us</div>
                            <div onClick={() => navigate('/application')} >Careers</div>
                        </div>
                        <div className="footeritem">
                            <div>On shore Joining</div>
                            <div>off shore Joining</div>
                            <div>Training</div>
                            <div>Placements</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>
                            Coiambatoor Branch 1: 6-1, jothi nagar, 2nd street, ramanuja nagar, coimbatore, tamil nadu - 641015
                            ph no. 96006-30942
                        </div>
                        <div>
                            Hyderabad Branch 2: 508, 5th floor, prajay princeton towers, saroornagar, lb nagar, hyderabad, telangana - 508247
                            ph no. 76739-82065
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between" style={{ padding: "2rem 0rem 2rem 0rem " }}>
                        <div>Copyright © 2024 loidsmarineservices.com™. All rights reserved</div>
                        <a href="https://jobminar.com/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}><div>With ❤️ Jobminar</div></a>
                        <div>
                            <span className="mx-4">Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}








