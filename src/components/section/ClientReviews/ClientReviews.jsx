import './ClientReviews.css';
import bgimg from '../../../assets/Images/img-group-14.png';
// import men1 from '../../../assets/Images/men1.png';
// import men2 from '../../../assets/Images/mes2.png'
import { useState } from 'react';

export function ClientReviews() {
    const [currentPage, setCurrentPage] = useState(1);
    const [bullutclr,setbullutclt] =useState("#001E6C");

    const renderContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div className=" p-4">
                        <div className='clientreviewh2' style={{ marginBottom: "5vh", textAlign: "center", color:"#001E6C"}}>Here is what our Clients are saying About us</div>
                        <div className='p-4 bg-light d-flex justify-content-center'>
                            <img className="d-block w-100" src={bgimg} alt="first slide" />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className=" p-4 ">
                        <div className='clientreviewh2' style={{ marginBottom: "2rem", textAlign: "center", color:"#001E6C" }}>Here is what our Clients are saying About us</div>
                        <div className='p-4 bg-light rounded'>
                            <img className="d-block w-100" src={bgimg} alt="second slide" />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className=" p-4 ">
                        <div className='clientreviewh2' style={{ marginBottom: "5vh", textAlign: "center" , color:"#001E6C"}}>Here is what our Clients are saying About us</div>
                        <div className=' p-4 bg-light rounded'>
                            <img className="d-block w-100" src={bgimg} alt="third slide" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    function leftarrowclick() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(3);
        }
    }

    function rightarrowclick() {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(1);
        }
    }

    return (
        <section className="clientreview-container d-flex justify-content-center">
            <div>
                <div>
                    {renderContent()}
                </div>
                <nav className='mt-2'>
                    <ul className="d-flex align-items-center  justify-content-center">
                        <span className='bi bi-chevron-left me-4 ' onClick={leftarrowclick} style={{color:"#001E6C"}}></span>

                        <li className="page-dot" onClick={() => setCurrentPage(1)} 
                            style={{color: currentPage === 1 ? bullutclr : 'white'}}>
                            <span className="page"></span>
                        </li>
                        <li className="page-dot" onClick={() => setCurrentPage(2)} 
                            style={{color: currentPage === 2 ? bullutclr : 'white'}}>
                            <span className="page"></span>
                        </li>
                        <li className="page-dot" onClick={() => setCurrentPage(3)} 
                            style={{color: currentPage === 3 ? bullutclr : 'white'}}>
                            <span className="page"></span>
                        </li>

                        <span className='bi bi-chevron-right mx-4' onClick={rightarrowclick} style={{color:"#001E6C"}}></span>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
