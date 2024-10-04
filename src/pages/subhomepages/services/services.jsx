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
                                <p className='text-secondary'>At Sailorswave, we understand the importance of efficient onshore operations
                                    Onshore joining refers to employees being hired to work within the country where the
                                    company's headquarters or main operations are located. This process often involves
                                    relocation for the new hires and is common in industries like IT, consulting, and finance,
                                    where proximity to the main office or client sites is essential</p>
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
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                            <div className="accordion-body">
                                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui facere corrupti inventore rem quas aliquid, animi repudiandae quo amet id nobis illo illum iure consequatur, similique nostrum magni enim?</p>
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
                            <div className="accordion-body">
                                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui facere corrupti inventore rem quas aliquid, animi repudiandae quo amet id nobis illo illum iure consequatur, similique nostrum magni enim?</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className=" btn-services-count">05/</span>
                                <span className='carousel-title'>Placement services</span>
                                <span><img src={pic5} alt='pic5'></img></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui facere corrupti inventore rem quas aliquid, animi repudiandae quo amet id nobis illo illum iure consequatur, similique nostrum magni enim?</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}