import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import UserApplication from "./components/applicationform/applicationform";
import ContactHomepage from "./pages/subhomepages/contactus/contactus";
import { Services } from "./pages/subhomepages/services/services";
import AboutRoute from "./pages/subhomepages/aboutroute/AboutRoute";
import { UserSelectionletter } from "./pages/letters/selectionletterhead/selectionletterhead";
import Myresult from "./pages/letter/myresult/myresult";
import ConfirmationLetter from "./pages/letter/confirmationletter/confirmationletter";
import SelectionLetter from "./pages/letter/selectionLetter/SelectionLetter";
import ApplicationLetter from "./pages/letter/ApplicationLetter/ApplicationLetter";
import Myadmitcard from "./pages/letter/myadmitcard/Myadmitcard";
import { InterviewLetterHead3 } from "./pages/letters/interviewletterhead3/interviewletterhead3";
import Documentsailorwave from "./pages/letter/DocumentSailorwave/documentsailorwave";
import { UserConfirmationletter } from "./pages/letters/confirmationletterhead/confirmationletterhead";
import UpladDocument from "./pages/letter/uploadDocument/uploadDocument";
import ShowmyapplicationForm from "./pages/showmyapplication/showmyapplication";
// ......admin routes 
import InterviewSchedule from "./Admin/pages/interviewfeadback/interviewfeadback";
import { Applicantprofile } from "./Admin/pages/applicantprofile/applicantprofile";
import { Applicantprofileapplication } from "./Admin/pages/applicantprofileapplications/applicantprofileapplication";
import { Admitcard } from "./Admin/pages/admitcard/admitcard";
import { Dashboardadmin } from "./Admin/pages/dashboardadmin/dashboardadmin";
import Myapplication from "./Admin/pages/myapplication/myapplication";
import { Headeradmin } from "./Admin/components/headeradmin/headeradmin";
import Selectionpage from "./Admin/pages/selectionletter/selection";
import SelectionProfile from "./Admin/pages/selectionprofile/selectionprofile";
import { Selectionletterhead } from "./Admin/pages/letters/selectionletterhead/selectionletterhead";
import Enquires from "./Admin/pages/Enquires/enquires";
import { Applicantfinance } from "./Admin/pages/Financials/financials";
import Admitcarddashboard from "./Admin/pages/admitcard/admitcarddashboard";
import Confirmationdashboard from "./Admin/pages/confirmation/confirmationdashboard";
import { Confirmationprofile } from "./Admin/pages/confirmation/confirmationprofile";
import { Confirmationletterhead } from "./Admin/pages/confirmation/confirmationletter";
import { Admitcardletterhead } from "./Admin/pages/admitcard/admitcardletter";
import ApplicationForm from "./Admin/pages/myapplication/applicationform/applicationform";
import Subadmin from "./Admin/pages/subadmin/subadmin";
import Addsubadmin from "./Admin/pages/subabmin/addsubadmin/addsubadmin";
import Interoutcome from "./Admin/pages/interviewfeadback/interviewoutcome";
import Adminprofile from "./Admin/pages/subadmin/adminprofile/adminprofile";
import Documentuser from "./Admin/components/documentsuser/documentuser";
import { Usercomments } from "./Admin/pages/usercomment/usercomments";
import Adminlogin from "./Admin/pages/adminLogin/login/adminlogin";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";

const Routing = () => {
  const [adminCookie, setcookie,removeCookie] = useCookies(["useradmin","admin"]);
  const navigate = useNavigate('')

  // const validateMainSubadmin = async () => {
  //   try {
  //     const response = await axios.get(`https://sailorswaveadmins-backend.onrender.com/mainsubadmin/${adminCookie.useradmin}`);
  //     return response.data.present;
  //   } catch (error) {
  //     console.log(error, 'error while fetching admin');
  //     return false;
  //   }
  // };
  // useEffect(() => {
  //   const checkAdmin = async () => {
  //     const isAdmin = await validateMainSubadmin();
  //     if (isAdmin) {
  //       navigate('/dashboardadmin');
  //     }else{
  //       removeCookie('useradmin')
  //       navigate('/')
  //     }
  //   };
  //   if (adminCookie.useradmin) { 
  //     checkAdmin();
  //   }
  // }, [adminCookie.useradmin]);
  useEffect(() => {
      if ((adminCookie.useradmin) || (adminCookie.admin)) { 
        navigate('/dashboardadmin');
      }
    }, [adminCookie.useradmin]);


  return (
    <>
      {/*......................user Routes.......................... applicationstatus */}
      <div className={`${((adminCookie.useradmin) || (adminCookie.admin)) ? 'd-none' : 'd-block'}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactHomepage />} />
          <Route path="/application" element={<UserApplication />} />
          <Route path='/myapplicationform/:applicationNo' element={<ShowmyapplicationForm />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/services" element={<Services />} />
          <Route path="/selectionletterhead" element={<UserSelectionletter />} />
          <Route path="/confirmationletterhead" element={<UserConfirmationletter />} />
          <Route path="/myresult" element={<Myresult />} />
          <Route path="/confirmationlatter" element={<ConfirmationLetter />} />
          <Route path="/selectionletter" element={<SelectionLetter />} />
          <Route path="/applicationletter" element={<ApplicationLetter />} />
          <Route path="/myadmitcard" element={<Myadmitcard />} />
          <Route path="/interviewletterhead3" element={<InterviewLetterHead3/>} />
          <Route path="/documentsailorwave" element={<Documentsailorwave />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
        </Routes>
        <Footer />
      </div>
      {/*........................Admin Routes......................... */}
      <div>
        {
          ((adminCookie.useradmin) || (adminCookie.admin)) ?
            <div>
              <Headeradmin />
              <Routes>
                <Route path="/dashboardadmin" element={<Dashboardadmin />}>
                  <Route path="myapplication" element={<Myapplication />} />
                  <Route path="admitcard/:applicationNo" element={<Admitcard />} />
                  <Route path="admitcardletter/:applicationNo" element={<Admitcardletterhead />} />
                  <Route path="admitcarddashboard" element={<Admitcarddashboard />} />
                  <Route path="interviewSchedule" element={<InterviewSchedule />} />
                  <Route path="applicationstatus/:id" element={<ApplicationForm />} />
                  <Route path="applicantprofile" element={<Applicantprofile />} />
                  <Route path="applicantprofile/:applicationNo" element={<Applicantprofile />} >
                    <Route path="applicantprofileapplication" element={<Applicantprofileapplication />} />
                    <Route path="applicantfinance" element={<Applicantfinance />} />
                    <Route path="applicantcomment" element={<Usercomments />} />
                  </Route>
                  <Route path="selectionletter" element={<Selectionpage />} />
                  <Route path="selectionletter/:id" element={<SelectionProfile />} />
                  <Route path="selectionletter/:id/letter" element={<Selectionletterhead />} />
                  <Route path="confirmationdashboard" element={<Confirmationdashboard />} />
                  <Route path="confirmationprofile/:applicationNo" element={<Confirmationprofile />} />
                  <Route path="confirmationletter/:applicationNo" element={<Confirmationletterhead />} />
                  <Route path="enquires" element={<Enquires />} />
                  <Route path="adminprofile/:id" element={<Subadmin />} />
                  <Route path="subadmin/addadmin/:adminId" element={<Addsubadmin />} />
                  <Route path="subadmin/addadmin/" element={<Addsubadmin />} />
                  <Route path="interviewSchedule/:id" element={<Interoutcome />} />
                  <Route path="subadmin" element={<Adminprofile />} />
                </Route>
                <Route path="/documentuser" element={<Documentuser />} />
              </Routes>
            </div> : <div>
              {/* <Routes>
                  <Route path="/adminlogin" element={<Adminlogin />} />
                </Routes> */}
            </div>
        }
      </div>
    </>
  );
};
export default Routing;
