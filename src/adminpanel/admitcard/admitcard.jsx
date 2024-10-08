import { useState } from 'react';
import profile from '../../assets/Images/dp-dummy.png';
import { useParams } from 'react-router-dom';

export function Admitcard() {
  const [admitcarddetails, setadmitcarddetails] = useState({
    name: "tonny stark",
    DOB: "29/08/1999",
    Gmail: "tonystark98@gmail.com",
    Location: "America"
  });

  const { param } = useParams(); 

  return (
    <>
      <div className='container row'>
        <div className='col-9 bg-light'>
          <div className='fw-bold fs-5 '>About</div>
          <div className='mt-5 ps-4 d-flex align-items-center ' >
            <div className="row text-secondary " style={{ height: "30vh", backgroundColor: "white", boxShadow: "1px 1px 5px 4px #edf1f0  " }}>
              <div className='col-3 d-flex align-items-center'>
                <img className='border border-1 rounded bg-secondary' src={profile} alt="Profile Picture" style={{ width: "100%" }}></img>
              </div>
              <div className='col-9 ps-4 ' style={{ alignContent: "center" }} >
                <dl >
                  <div className='row'>
                    <dt className='col-3'>Name:</dt>
                    <dd className='col-9'>{admitcarddetails.name}</dd>
                  </div>
                  <div className='row'>
                    <dt className='col-3'>Birth Date:</dt>
                    <dd className='col-9'>{admitcarddetails.DOB}</dd>
                  </div>
                  <div className='row'>
                    <dt className='col-3'>Email:</dt>
                    <dd className='col-9'>{admitcarddetails.Gmail}</dd>
                  </div>
                  <div className='row'>
                    <dt className='col-3'>Location:</dt>
                    <dd className='col-9'>{admitcarddetails.Location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className='text-secondary mt-4'>
            <h5>Details of {admitcarddetails.name}</h5>
            <dl>
              <div className='d-flex my-4   bg-light'>
                <dt className='mx-4 pe-3'>Application No.</dt>
                <dd>12345333322</dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4'>Application status</dt>
                <dd>Approved</dd>
              </div>
              <div className='d-flex my-4   bg-light '>
                <dt className='mx-4 pe-3'>Date of applied</dt>
                <dd>15/08/2024</dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4'>Date of Interview</dt>
                <dd><input className='form-control' type='date'></input></dd>
              </div>
              <div className='d-flex my-4  bg-light '>
                <dt className='mx-4'>Time of Interview</dt>
                <dd className='d-flex align-items-center'><input className=' form-control'></input><span className='bi bi-watch' style={{ marginLeft: "-10%" }}></span></dd>
              </div>
            </dl>
          </div>
          <div>
            <button className='btn text-light w-100 ' style={{ backgroundColor: "#0d6efd" }}>Generate Admit card</button>
          </div>
        </div>
      </div>
    </>
  );
}
