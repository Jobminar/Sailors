// import leterheadheader from "../../../assets/Images/leterheadheader.png";
// import "./confirmationletterhead.css";

// export function Confirmationletterhead(param) {
//     return (
//         <div className="d-flex justify-content-center">
//             <div className="modalfade" id="confirmationlettermodal">
//                 <div className="modal-head">
//                     <img
//                         src={leterheadheader}
//                         alt="letterhead"
//                         style={{ width: "100%" }}
//                     ></img>
//                 </div>
//                 <hr></hr>
//                 <div className="modal-body ">
//                     <div className="modal-body-leterhead">
//                         <h5 className="text-center letterheadtitle">CONFIRMATION LETTER</h5>
//                         <p>
//                             <strong>Dear Applicant,</strong>
//                             <div className="mt-3">
//                                 We would like to inform you that your seat has been reserved.
//                             </div>
//                             <div className="mt-3">
//                                 For further procedure, Please go through the letters attached here with this mail. Also For any query you can call us…
//                             </div>
//                         </p>
//                         <p>
//                             <strong>REF NO: {param.refno}</strong>
//                         </p>
//                         <p>
//                             <strong>  NAME: MR. {param.name}</strong>
//                         </p>
//                         <p>
//                             <strong>   S/O: Mr. {param.fathername}</strong>
//                         </p>
//                         <p>
//                             <strong>Congratulations,</strong>
//                         </p>
//                         <div >
//                             <div className="mb-4">
//                                 We glad to inform you that the seat has been reserved for the pre sea training. Here after we need to apply for your seafarer identification number. After we can send your Training batch details and Batch starting date etc.

//                                 <div className="mt-3">

//                                     After completion of your training we will provide you placement assurance in India and foreign vessels.
//                                 </div>
//                             </div>
//                             <p>
//                                 <strong>Installment dates</strong>
//                             </p>

//                             <div className="mb-4">
//                                 <div className="mb-3">2nd Installment date: Rs.xxxxx/-ON 20-07-2024</div>
//                                 <div>
//                                     3rd Installment date: Rs.xxxxx/-ON 20-08-2024

//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <strong>REPORTING DATE:</strong>01/08/2024 (CANDIDATE SHOULD COME TO BRANCH OFFICE ON THE SAME DATE AT 10:30 AM)
//                             </div>
//                             <div className="mb-4">
//                                 <strong>NOTE:</strong> CANDIDATE SHOULD BEAR THE VISA & TICKET CHARGES/ON BOARD PRO CHARGES
//                             </div>
//                             <div>
//                                 <strong>FOR QUERY:</strong> 8790695737

//                             </div>
//                             <div className="mt-4">
//                                 <strong> WISH YOU A BRIGHT FUTURE</strong>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useParams } from "react-router-dom";
import leterheadheader from "../../../assets/Images/leterheadheader.png";
import "./confirmationletterhead.css";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

export function Confirmationletterhead() {
    const { id } = useParams();
    const [user, setusers] = useState({})
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const fetchdata = async () => {
        try {
            const usedata = await axios.get('http://127.0.0.1:7001/candidates')
            const users = usedata.data;
            const filteredUsers = users.find((user) => user.applicationId === parseInt(id));
            setusers(filteredUsers)
        } catch (error) {
            console.error(error, 'catch error');
        }
    }
    console.log(user)
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <div className="d-flex justify-content-center">
            <div className="modalfade border border-1 " style={{ height: "145vh" }} id="confirmationlettermodal">
                <button onClick={reactToPrintFn} className="btn btn-warning">Print</button>
                <div className="p-2" ref={contentRef}>
                    <div className="modal-head">
                        <img
                            src={leterheadheader}
                            alt="letterhead"
                            style={{ width: "100%" }}
                        ></img>
                    </div>
                    <hr></hr>
                    <div className="modal-body ">
                        <div className="modal-body-leterhead">
                            <h5 className="text-center letterheadtitle">CONFIRMATION LETTER</h5>
                            <p>
                                <strong>Dear Applicant,</strong>
                                <div className="mt-3">
                                    We would like to inform you that your seat has been reserved.
                                </div>
                                <div className="mt-3">
                                    For further procedure, Please go through the letters attached here with this mail. Also For any query you can call us…
                                </div>
                            </p>
                            <p>
                                <strong>REF NO:{user?.applicationId}</strong>
                            </p>
                            <p>
                                <strong>  NAME: MR.{user?.candidateName} </strong>
                            </p>
                            <p>
                                <strong>   S/O: Mr.{user?.fatherName} </strong>
                            </p>
                            <p>
                                <strong>Congratulations,</strong>
                            </p>
                            <div >
                                <div className="mb-4">
                                    We glad to inform you that the seat has been reserved for the pre sea training. Here after we need to apply for your seafarer identification number. After we can send your Training batch details and Batch starting date etc.

                                    <div className="mt-3">

                                        After completion of your training we will provide you placement assurance in India and foreign vessels.
                                    </div>
                                </div>
                                <p>
                                    <strong>Installment dates</strong>
                                </p>

                                <div className="mb-4">
                                    <div className="mb-3">2nd Installment date: <strong>Rs.{user?.confirmationletter?.InstalmentAmount2}/- {user?.confirmationletter?.InstalmentDate2}</strong> </div>
                                    <div>
                                        3rd Installment date: <strong>Rs.{user?.confirmationletter?.InstalmentAmount3}/- {user?.confirmationletter?.InstalmentDate3}</strong>

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <strong>REPORTING DATE:</strong>01/08/2024 (CANDIDATE SHOULD COME TO BRANCH OFFICE ON THE SAME DATE AT 10:30 AM)
                                </div>
                                <div className="mb-4">
                                    <strong>NOTE:</strong> CANDIDATE SHOULD BEAR THE VISA & TICKET CHARGES/ON BOARD PRO CHARGES
                                </div>
                                <div>
                                    <strong>FOR QUERY:</strong> 8790695737

                                </div>
                                <div className="mt-4">
                                    <strong> WISH YOU A BRIGHT FUTURE</strong>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

