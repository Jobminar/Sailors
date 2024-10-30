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
import UpladDocument from "./pages/letter/uploadDocument/uploadDocument";
import InterviewSchedule from "./adminpanel/interviewfeadback/interviewfeadback";
import { Applicantprofile } from "./adminpanel/applicantprofile/applicantprofile";
import { Applicantprofileapplication } from "./adminpanel/applicantprofileapplications/applicantprofileapplication";
import { Admitcard } from "./adminpanel/admitcard/admitcard";
import { Dashboardadmin } from "./adminpanel/dashboardadmin/dashboardadmin";
import { Dashboard } from "./adminpanel/dashboard/dashboard";
import Myapplication from "./adminpanel/myapplication/myapplication";
import ShowmyapplicationForm from "./pages/showmyapplication/showmyapplication";

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
          <Route path='/myapplicationform/:applicationNo' element={<ShowmyapplicationForm/>} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/services" element={<Services />} />
          <Route path="/selectionletterhead" element={<Selectionletterhead />} />
          <Route path="/confirmationletterhead" element={<Confirmationletterhead />} />
          <Route path="/myresult" element={<Myresult />} />
          <Route path="/confirmationlatter" element={<ConfirmationLetter />} />
          <Route path="/selectionletter" element={<SelectionLetter />} />
          <Route path="/applicationletter" element={<ApplicationLetter />} />
          <Route path="/myadmitcard" element={<Myadmitcard />} />
          <Route path="/interviewletterhead3" element={<InterviewLetterHead3 />} />
          <Route path="/documentsailorwave" element={<Documentsailorwave />} />
          <Route path="/uploadDocument" element={<UpladDocument />} />
          <Route path="/interviewSchedule" element={<InterviewSchedule />} />
          <Route path="/dashboardadmin" element={<Dashboardadmin />}>
            <Route path="applicantprofile" element={<Myapplication />} />
            <Route path="admitcard" element={<Admitcard />} />
            <Route path="interviewSchedule" element={<InterviewSchedule />} />
            <Route path="applicantprofileapplication" element={<Applicantprofileapplication />} />
            <Route path="applicantprofile" element={<Applicantprofile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routing;
