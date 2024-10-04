import Testimonial from "../../home/Testimonials/Testimonial";
import "./AboutRoute.css";
// import bgImage from '../../../assets/Images/aboutBgImage.png'
const AboutRoute = () => (
  <>
    <section>
      <div className="main-container-aboutroute">
        <div className="workwithus-container">
          <h1>Work with us</h1>
          <p>
            We're constantly trying to express ourselves and actualize your
            dreams. if you have an intrest join with us and fullfill your dream
          </p>
          <button className="apply-btn2">APPLY NOW</button>
          <p>Find us on</p>
          <div>
            <i className="bi bi-facebook mx-2 "></i>
            <i className="bi bi-instagram mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
          </div>
        </div>
        <div className="container-for-paras">
          <p className="para-about-sailors1 pt-5">
            Welcome to Sailors wave Shipment Management Pvt Ltd, your trusted
            partner in comprehensive maritime solutions. Established in 2022,
            Sailors wave is dedicated to delivering top-tier services in onshore
            resource management, offshore resource management, training, and
            placements. Our mission is to support and enhance the global
            maritime industry by providing innovative and reliable solutions
            tailored to meet the unique needs of our clients.
          </p>
          <p className="para-about-sailors2">
            we offer comprehensive services including crew management, ship
            management, and maritime training. We prioritize the safety of our
            crew and vessels, adhering to the highest standards of
            professionalism and integrity. With a global network and a
            commitment to innovation, SailorsWave is at the forefront of the
            Merchant Navy sector, ready to navigate the seas and chart a course
            for success. Join us and experience unparalleled maritime service.
          </p>
        </div>
      </div>
    </section>
    <Testimonial />
  </>
);

export default AboutRoute;
