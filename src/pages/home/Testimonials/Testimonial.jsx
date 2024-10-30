import "./Testimonial.css";
import icon1 from "../../../assets/Images/img-grid-18.png";
import icon2 from "../../../assets/Images/img-grid-19.png";
import icon3 from "../../../assets/Images/img-grid-20.png";
import icon4 from "../../../assets/Images/hapag-icon.png";
import icon5 from "../../../assets/Images/img-grid-22.png";

const Testimonial = () => (
  <div className="test-container">
    <div className="heading1">Trusted By Companies including</div>

    <p className="para1">
    At Loids Marins Shipment Management Pvt Ltd, our clients are at the heart of everything we do. Established in 2022, we have built a strong reputation for delivering exceptional service and value to a diverse clientele worldwide.
    </p>

    <div className="icons-container">
      <div className="bg-light icon1-container">
        <img src={icon1} alt="icon1" className="icon1" />
      </div>
      <div className="icon1-container">
        <img src={icon2} alt="icon1" className="icon1" />
      </div>
      <div className="icon1-container">
        <img src={icon3} alt="icon1" className="icon1" />
      </div>
      <div className="icon1-container">
        <img src={icon4} alt="icon1" className="icon1" />
      </div>
      <div className="icon1-container">
        <img src={icon5} alt="icon1" className="icon1" />
      </div>
    </div>
  </div>
);
export default Testimonial;
