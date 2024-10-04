import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import ApplicationForm from "./components/applicationform/applicationform";
import ContactHomepage from "./pages/subhomepages/contactus/contactus";
import { Services } from "./pages/subhomepages/services/services";
import AboutRoute from "./pages/subhomepages/aboutroute/AboutRoute";
import { Selectionletterhead } from "./pages/letters/selectionletterhead/selectionletterhead";
import Myresult from "./pages/letter/myresult/myresult";
import ConfirmationLetter from "./pages/letter/confirmationletter/confirmationletter";
import SelectionLetter from "./pages/letter/selectionLetter/SelectionLetter";
import ApplicationLetter from "./pages/letter/ApplicationLetter/ApplicationLetter";
import Myadmitcard from "./pages/letter/myadmitcard/Myadmitcard";
import { InterviewLetterHead3 } from "./pages/letters/interviewletterhead3/interviewletterhead3";
import Documentsailorwave from "./pages/letter/DocumentSailorwave/documentsailorwave";
import { Confirmationletterhead } from "./pages/letters/confirmationletterhead/confirmationletterhead";

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
          <Route path="/services" element={<Services />} />
          <Route
            path="/selectionletterhead"
            element={<Selectionletterhead />}
          />
          <Route path="/confirmationletterhead" element={<Confirmationletterhead/>} /> 
          <Route path="/myresult" element={<Myresult />} />
          <Route path="/confirmationlatter" element={<ConfirmationLetter />} />

          <Route path="/selectionletter" element={<SelectionLetter />} />
          <Route path="/applicationletter" element={<ApplicationLetter />} />
          <Route path="/myadmitcard" element={<Myadmitcard />} />

          <Route
            path="/interviewletterhead3"
            element={<InterviewLetterHead3 />}
          />
          <Route path="/documentsailorwave" element={<Documentsailorwave/>}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routing;
