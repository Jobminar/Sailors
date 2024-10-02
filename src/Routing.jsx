import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Section } from "./components/section/section";
import ApplicationForm from "./components/applicationform/applicationform";
import ContactHomepage from "./pages/subhomepages/contactus/contactus";


const Routing = () => {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<ApplicationForm/>} />
          <Route path="/contact" element={<ContactHomepage/>} />
          {/* <Route path="/" element={Section}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};
export default Routing;
