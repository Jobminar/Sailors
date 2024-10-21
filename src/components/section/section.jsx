import arrow from "../../assets/Images/arrow-right.png";
import imagesection from  '../../assets/Images/section-img.png';
import "./section.css"
import BecomeASailor from "./BecomeASailor/BecomeASailor";
import { ClientReviews } from "./ClientReviews/ClientReviews";
export function Section() {
    return (
        <>
            <section>
                <div className="section-whychoseus" style={{margin:"2vh 5vh 2vh 5vh"}}>
                    {/* <div className="d-flex position-relative" style={{ margin: "0vh 10vh 0vh 10vh" }}>
                        <div className="position-relative">
                            <img
                                className="position-absolute"
                                src={dottedimg}
                                style={{
                                    height: "25vh",
                                    opacity: "0.3",
                                    marginTop: "-6vh",
                                    marginLeft: "-6vh",
                                    zIndex: 0,
                                }}
                                alt="dotted background"
                            />
                            <img
                                src={imggrid11}
                                style={{
                                    marginLeft:"5%",
                                    height: "60vh",
                                    borderRadius: "1vh",
                                    zIndex: 2,
                                    position: 'relative'
                                }}
                                alt="main grid image 11"
                            />
                        </div>
                        <div className="w-100">
                            <img
                                src={imggrid21}
                                style={{
                                    height: "20vh",
                                    width: "75%",
                                    margin: "0vh 0vh 3vh 8vh ",
                                    borderRadius: "1vh",
                                    zIndex: 2,
                                    position: 'relative'
                                }}
                                alt="grid image 21"
                            />
                            <img
                                src={imggrid31}
                                style={{
                                    height: "46vh",
                                    marginLeft: "-3vh",
                                    borderRadius: "1vh",
                                    zIndex: 2,
                                    position: 'relative'
                                }}
                                alt="grid image 31"
                            />
                        </div>
                    </div> */}
                    <div style={{width:"100%"}}>
                        <img src={imagesection} className="px-5" style={{width:"100%"}}></img>
                    </div>
                    <div style={{width:"100%"}}>
                        <div style={{width:"80%"}}>
                            <h2 className="fw-bold " style={{ color: "#414141"}}>Why choose us</h2>
                            <img
                                src={arrow}
                                alt="arrow"
                            />
                            
                            <div className="mt-4">
                                <div  className=" content-section-container"> 
                                    <h6 className="fw-bold pb-3" style={{ color: "#1F284F" }}>Expertise and Experience</h6>
                                    <p>
                                        Our team comprises seasoned professionals with extensive
                                        experience in the maritime industry. We bring deep insights
                                        and practical knowledge to every project we undertake.
                                    </p>
                                </div>
                                <div className=" content-section-container">
                                    <h6 className="fw-bold pb-3" style={{ color: "#1F284F" }}>Customized Solutions</h6>
                                    <p>
                                        We understand that every client has unique needs. Our
                                        services are tailored to meet the specific requirements of
                                        each client, ensuring maximum satisfaction and efficiency.
                                    </p>
                                </div>
                                <div className=" content-section-container">
                                    <h6 className="fw-bold pb-3" style={{ color: "#1F284F" }}>Commitment to Quality</h6>
                                    <p>
                                        Quality is at the core of everything we do. We adhere to the
                                        highest standards in all our services, ensuring reliability
                                        and excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
