import "./Testimonial.css";
import icon1 from "../../../assets/Images/img-grid-18.png";
import icon2 from "../../../assets/Images/img-grid-19.png";
import icon3 from "../../../assets/Images/img-grid-20.png";
import icon4 from "../../../assets/Images/img-grid-21.png";
import icon5 from "../../../assets/Images/img-grid-22.png";

const Testimonial = () => (
  <div className="test-container">
    <h4 className="heading1">Trusted By Companies including</h4>

    <p className="para1">
      At Sailorswave Shipment Management Pvt Ltd, our clients are at the heart
      of everything we do. Established in 2022, we have built a reputation for
      delivering exceptional service and value to a diverse clientele across the
      globe.
    </p>

    <div className="icons-container">
      <div className="bg-light">
        <img src={icon1} alt="icon1" className="icon1" />
      </div>
      <div>
        <img src={icon2} alt="icon1" className="icon1" />
      </div>
      <div>
        <img src={icon3} alt="icon1" className="icon1" />
      </div>
      <div>
        <img src={icon4} alt="icon1" className="icon1" />
      </div>
      <div>
        <img src={icon5} alt="icon1" className="icon1" />
      </div>
    </div>
  </div>
);
export default Testimonial;
