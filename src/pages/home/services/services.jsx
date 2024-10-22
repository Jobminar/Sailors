import React from "react";
import Vector1 from "../../../assets/Images/pic1.png";
import Vector2 from "../../../assets/Images/pic2.png";
import Vector3 from "../../../assets/Images/pic3.png";
import Vector4 from "../../../assets/Images/pic4.png";
import Vector5 from "../../../assets/Images/pic5.png";
import "./services.css";

const OurServices = () => {
  return (
    <>
      <section id="services">
        <div className="our-services ">
          <p className="text-center services">Our Services</p>
          <div className="service-row">
            <div className=" card-total">
              <div className="color-prop">
                <img
                  src={Vector1}
                  className="card-img-top rounded  d-block  card-image11 color-prop"
                  alt="Vector1"
                />
              </div>

              <p className="card-title title1">On Shore Joining's</p>
              <div className="card-body services-block">
                <p className="card-text text11">
                  At Sailors wave , we understand the importance of efficient
                  onshore operations
                </p>
              </div>
            </div>
            <div className="card-total">
              <img
                src={Vector2}
                className=" card-img-top rounded  d-block card-image1"
                alt="img"
              />

              <p className="card-title title">Off Shore Joining's</p>
              <div className="card-body services-block">
                <p className="card-text text1">
                  Our offshore resource management services are designed to
                  support the complex needs of offshore operations
                </p>
              </div>
            </div>
            <div className=" card-total">
              <img
                src={Vector3}
                className="card-img-top rounded  d-block card-image1"
                alt="img"
              />

              <p className="card-title title">Training Services</p>
              <div className="card-body services-block">
                <p className="card-text text1">
                  We believe that the key to a successful maritime career is
                  continuous learning and development
                </p>
              </div>
            </div>

            <div className="card-total ">
              <img
                src={Vector4}
                className=" card-img-top rounded  d-block  card-image14"
                alt="Vector1"
              />

              <p className="card-title title4">Placement Services</p>
              <div className="card-body services-block">
                <p className="card-text text14">
                  Connecting talent with opportunity is at the heart of what we
                  do. Our placement services are designed to help maritime
                </p>
              </div>
            </div>

            <div className="card-total ">
              <img
                src={Vector5}
                className=" card-img-top rounded  d-block card-image15"
                alt="Vector1"
              />

              <p className="card-title title5">Cruise Services</p>
              <div className="card-body services-block">
                <p className="card-text text15">
                  1. Carnival Corporation & pic <br /> 2. Royal Caribbean Group{" "}
                  <br /> 3. Norwegian Cruise Line Holdings Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
