import './ClientReviews.css';
import bgimg from '../../../assets/Images/img-group-14.png';
import { useState } from 'react';

export function ClientReviews() {
    const [currentPage, setCurrentPage] = useState(1)
    const[bullutclr,setbullutclr]=useState("#001E6C")
    const renderContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div className="mt-4 p-4 ">
                        <h2 style={{ marginBottom: "5vh", textAlign: "center", color:"#001E6C"}}>Here is what our Clients are saying About us</h2>
                        <div className='p-4 bg-light rounded'>
                            <img className="d-block w-100" src={bgimg} alt="second slide" />
                            
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="mt-4 p-4 ">
                        <h2 style={{ marginBottom: "5vh", textAlign: "center", color:"#001E6C" }}>Here is what our Clients are saying About us</h2>
                        <div className='p-4 bg-light rounded'>
                            <img className="d-block w-100" src={bgimg} alt="second slide" />
                            
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="mt-4 p-4 ">
                        <h2 style={{ marginBottom: "5vh", textAlign: "center" , color:"#001E6C"}}>Here is what our Clients are saying About us</h2>
                        <div className=' p-4 bg-light rounded'>
                            <img className="d-block w-100" src={bgimg} alt="second slide" />
                            
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    function leftarroeclick() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(3)
        }
    }
    function rightarroeclick() {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(1)
        }
    }
    return (
        <section className="clientreview-container d-flex justify-content-center">
            <div>
                <div>
                    {renderContent()}
                </div>
                <nav className='mt-3'>
                    <ul className="d-flex align-items-center  justify-content-center">
                        <span className='bi bi-chevron-left mx-4 fs-3' onClick={leftarroeclick} style={{color:"#001E6C"}}></span>
                        <li className={`page-dot ` }onClick={() => setCurrentPage(1)} style={{color:`${bullutclr}`}}>
                            <span className="page "></span>
                        </li>
                        <li className={`page-dot `} onClick={() => setCurrentPage(2)} style={{color:`${bullutclr}`}}>
                            <span className=""  style={{   }}></span>
                        </li>
                        <li className={`page-dot `} onClick={() => setCurrentPage(3)}  style={{color:`${bullutclr}`}}>
                            <span className="" style={{ }}></span>
                        </li>

                        <span className='bi bi-chevron-right fs-3 mx-4' onClick={rightarroeclick} style={{color:"#001E6C"}}></span>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
