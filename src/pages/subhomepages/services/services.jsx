import pic1 from '../../../assets/Images/pic1.png';
import pic2 from '../../../assets/Images/pic2.png';
import pic3 from '../../../assets/Images/pic3.png';
import pic4 from '../../../assets/Images/pic4.png';
import pic5 from '../../../assets/Images/pic5.png';
import { Asideicons } from '../../../components/aside/aside';
import './services.css'
export function Services() {
    return (
        <>
            <Asideicons />
            <section className='section-services-accordian'>
                <h3 className='ms-4' style={{ marginBottom: "3%", color: "#414141" }}>Our services</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className=" btn-services-count">01/</span>
                                <span className='carousel-title'>On shore Joining's</span>
                                <span><img src={pic1} alt='pic1'></img></span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='text-secondary'>At Sailorswave, we understand the importance of efficient onshore operations</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className=" btn-services-count">02/</span>
                                <span className='carousel-title'>Off shore Joining's</span>
                                <span><img src={pic2} alt='pic2'></img></span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-secondary">
                                Our offshore resource management services are designed to support the complex needs of offshore operations
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className=" btn-services-count">03/</span>
                                <span className='carousel-title'>Training services</span>
                                <span><img src={pic3} alt='pic3'></img></span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-secondary">
                                We believe that the key to a successful maritime career is continuous learning and development
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className=" btn-services-count">04/</span>
                                <span className='carousel-title'>Placement services</span>
                                <span><img src={pic4} alt='pic4'></img></span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-secondary">
                                Connecting talent with opportunity is at the heart of what we do. Our placement services are designed to help maritime
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className=" btn-services-count">05/</span>
                                <span className='carousel-title'>Cruise Services</span>
                                <span><img src={pic5} alt='pic5'></img></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-secondary">
                                1. Carnival Corporation & plc <br />
                                2.Royal Caribbean Group <br />
                                3.Norwegian Cruise Line Holdings Ltd.
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}