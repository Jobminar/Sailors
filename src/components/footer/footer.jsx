import logo from "../../assets/Images/logo.png"
import playstoreimg from "../../assets/Images/playstore.jpg"
import iosstoreimg from "../../assets/Images/iosstore.jpg"
import telegramlogo from '../../assets/Images/telegramlogo.png'
import './footer.css'
export function Footer() {
    return (
        <>
            <footer style={{ borderTop: "2px solid gray" }} >
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
                                <button className=" btn" style={{ backgroundColor: "#D96009" }}> <img src={telegramlogo}></img></button>
                            </div>
                        </div>
                        <div>
                            <img id="logo" src={logo} className="py-2" style={{ width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
                        <div style={{ width: "30%" }}>
                            <h5>Sailorswave</h5>
                            <div className="text-justify" >
                                Our team comprises seasoned professionals with extensive experience in the maritime industry. We bring deep insights and practical knowledge to every project we undertake.
                            </div>
                        </div>
                        <div className="footeritem">
                            <div>About us</div>
                            <div>Reviews</div>
                            <div>Contact Us</div>
                            <div>Careers</div>
                        </div>
                        <div className="footeritem">
                            <div>On shore Joining</div>
                            <div>off shore Joining</div>
                            <div>Training</div>
                            <div>Placements</div>
                        </div>
                        <div >
                            <div>Download our App</div>
                            <div style={{ paddingRight: "6vh" }}>
                                <span className="me-2">
                                    <img src={playstoreimg} width={{ height: "5vh" }}></img>
                                </span>
                                <span>
                                    <img src={iosstoreimg} width={{ height: "5vh" }}></img>
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between" style={{ padding: "2rem 0rem 2rem 0rem " }}>
                        <div>Copyright © 2024 Sailorswaves.com™. All rights reserved</div>

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








