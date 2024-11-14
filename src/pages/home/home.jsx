import About from "./About/about";
import Carousel from "./Carousel";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Testimonial from "./Testimonials/Testimonial";
// import Services from "./services/services";
import OurServices from "./services/services";
import { Section } from "../../components/section/section";
import { ClientReviews } from "../../components/section/ClientReviews/ClientReviews";
import BecomeASailor from "../../components/section/BecomeASailor/BecomeASailor";
import { Aside, Asideicons } from "../../components/aside/aside";
// import Review from "./Review/review";

const Home = () => (
  <>
    <Asideicons/>
    <Carousel />
    <About />
    <Section/>
    <Testimonial />
    {/* <ClientReviews/> */}
    <OurServices />
    <BecomeASailor/>

  </>
);
export default Home;
