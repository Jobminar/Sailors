import "./about.css";
// import aboutImg from "../../../assets/Images/background-image.jpg";

const About = () => (
  <div className="p-5 m-5 d-flex justify-content-between">
    <div className="first-container">
      <h1 className="heading my-4">About sailorswave</h1>
      <hr className="hr" />
      <p className="heading my-4">
        Welcome to Sailors wave Shipment Management Pvt Ltd, your trusted
        partner in comprehensive maritime solutions. Established in 2022,
        Sailors wave is dedicated to delivering top-tier services in onshore
        resource management, offshore resource management, training, and
        placements. Our mission is to support and enhance the global maritime
        industry by providing innovative and reliable solutions tailored to meet
        the unique needs of our clients.
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
        <button className="  my-2 text-white button  ">
          Read More
        </button>
      </div>
    </div>
    <div className="second-container d-flex flex-column justify-content-between">
      <div>
        <h1 className="sub-heading">
          20 <span>years</span>
        </h1>
        <p className="para">Experience in merchant navy</p>
      </div>
      <div>
        <h1 className="sub-heading">
          2000+ <span></span>
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
