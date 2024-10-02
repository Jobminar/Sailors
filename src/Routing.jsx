import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
// import { Section } from "./components/section/section";
import ApplicationForm from "./components/applicationform/applicationform";
import AboutRoute from "./pages/subhomepages/aboutroute/AboutRoute";
import SelectionLetter from "./pages/subhomepages/selectionLetter/SelectionLetter";
// import Backend from "./pages/subhomepages/backendData/backend";

const Routing = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/selectionletter" element={<SelectionLetter />} />

          {/* <Route path="/backend" element={<Backend />} /> */}
          {/* <Route path="/" element={Section}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default Routing;
