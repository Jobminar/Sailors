import About from "./About/about";
import Carousel from "./Carousel";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Testimonial from "./Testimonials/Testimonial";
// import Services from "./services/services";
import OurServices from "./services/services";
// import Review from "./Review/review";

const Home = () => (
  <>
    <Carousel />
    <About />
    <Testimonial />
    <OurServices />
  </>
);
export default Home;
