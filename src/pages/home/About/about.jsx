import "./about.css";
// import aboutImg from "../../../assets/Images/background-image.jpg";
import underlineabout from '../../../assets/Images/arrow-underline.png'
const About = () => (
  <div className="py-5  justify-content-center about-container " >
    <div className="first-container">
      <h1 className="heading ">About Loids Marins</h1>
      <img src={underlineabout}></img>
      <p  className=" heading my-4">
      Welcome to Loids Marins Shipment Management Pvt Ltd, your trusted partner in comprehensive maritime solutions. Established in 2022, Loids Marins is dedicated to delivering top-tier services in the onshore industry by providing innovative and reliable solutions tailored to meet the unique needs of our clients.
        <br />
        <br />
        we offer comprehensive services including crew management, ship
        management, and maritime training. We prioritize the safety of our crew
        and vessels, adhering to the highest standards of professionalism and
        integrity. With a global network and a commitment to innovation,
        SailorsWave is at the forefront of the Merchant Navy sector, ready to
        navigate the seas and chart a course for success. Join us and experience
        unparalleled maritime service.
      </p>
      <div>
        <button className="  my-2 text-white button-about  ">
          Read More
        </button>
      </div>
    </div>
    <div className="second-container d-flex flex-column justify-content-between">
      <div>
        <h1 className="sub-heading">
          20 <span className="yearspan">years</span>
        </h1>
        <p className="para">Experience in merchant navy</p>
      </div>
      <div>
        <h1 className="sub-heading">
          2000+
        </h1>
        <p className="para">Placements in Every Year</p>
      </div>
      <div>
        <h1 className="sub-heading">1332+</h1>
        <p className="para">Clients</p>
      </div>
    </div>
  </div>
);
export default About;
