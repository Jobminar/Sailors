import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import ApplicationForm from "./components/applicationform/applicationform";
import ContactHomepage from "./pages/subhomepages/contactus/contactus";
import { Services } from "./pages/subhomepages/services/services";
import AboutRoute from "./pages/subhomepages/aboutroute/AboutRoute";
// import SelectionLetter from "./pages/subhomepages/selectionLetter/SelectionLetter";
import { Selectionletterhead } from "./pages/letters/selectionletterhead/selectionletterhead";
import Myresult from "./pages/letter/myresult/myresult";
import ConfirmationLetter from "./pages/letter/confirmationletter/confirmationletter";
import UpladDocument from "./pages/letter/uploadDocument/uploadDocument";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactHomepage />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/about" element={<AboutRoute />} />
          {/* <Route path="/selectionletter" element={<SelectionLetter />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/selectionletterhead"  element={<Selectionletterhead />}/>
          <Route path="/myresult" element={<Myresult />} />
          <Route path="/confirmationlatter" element={<ConfirmationLetter />} />
          <Route path="/uploadDocument" element={<UpladDocument />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routing;
