import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Images/carousel1.png'
import image2 from "../../assets/Images/carouselimg2.png";
import image3 from "../../assets/Images/carouselimg3.png";
import "./carosel.css";
// import sidebar from "../../assets/Images/sidebar.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="main-container">
      <div className="slider-container">
        <Slider {...settings}>
            <div className="carousel-item active rounded-4">
              <img src={image1} className="d-block w-100 rounded" alt="img2" />
            </div>
            <div className="carousel-item rounded-4">
              <img src={image2} className="d-block w-100" style={{height:'120%'}} alt="img3" />
            </div>
        </Slider>
      </div>
      <div className="mblcarousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="img1" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="img2" />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
