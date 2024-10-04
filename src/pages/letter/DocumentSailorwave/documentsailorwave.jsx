const Documentsailorwave = () => {
    const applicationData = [
        {
          applicationNumber: "xxxxxxxx",
          submittedApplication: "21/06/24",
          applicationStatus: "Approved",
          admitCardStatus: "Generated",
          downloadAdmitCard: "Download",
          interviewDate: "xx-xx-xxxx",
          interviewFeedback: "Selected",
          outcome: "Selected",
          comments: "Documents shared",
          uploadDocuments: "Upload"
        }
      ];
      
    return (
        <>
            <div  style={{margin:'200px 30px'}}>
               <div className="container">
                 <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Application No.</th>
                            <th>Submitted Application</th>
                            <th>Application Status</th>
                            <th>Admit card status</th>
                            <th>Download Admit card </th>
                            <th>Interview date</th>
                            <th>Interview Feedback</th>
                            <th>Outcome</th>
                            <th>Comments</th>
                            <th>Upload documents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicationData.map((val,index)=>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val.applicationNumber}</td>
                                    <td>{val.submittedApplication}</td>
                                    <td>
                                        {val.applicationStatus}
                                        <span className="bi bi-check-circle-fill"></span>
                                    </td>
                                    <td>{val.admitCardStatus}</td>
                                    <td>{val.downloadAdmitCard}</td>
                                    <td>{val.interviewDate}</td>
                                    <td>{val.interviewFeedback}</td>
                                    <td>{val.outcome}</td>
                                    <td>{val.comments}</td>
                                    <td>{val.uploadDocuments}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
               </div>
            </div>
        </>
    )
}
export default Documentsailorwave;












