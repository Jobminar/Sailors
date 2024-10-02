import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/Images/carousel1.jpg";
import "./carosel.css";
import sidebar from "../../assets/Images/sidebar.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="logo" id="mainbanner">
            <img src={image1} alt="" className="image3" style={{ width: "100%" }} />
          </div>
          <div>
            <h1>2</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
