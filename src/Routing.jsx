import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Section } from "./components/section/section";
import ApplicationForm from "./components/applicationform/applicationform";

const Routing = () => {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<ApplicationForm/>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={Section}></Route> */}
        </Routes>
      </BrowserRouter>
      <Section/>
      <Footer/>
    </>
  );
};
export default Routing;
