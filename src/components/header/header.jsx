import "./header.css";
import logo from "../../assets/Images/logo.png";
// import logo from "../../assets/Images/logo2.svg"
import dp from "../../assets/Images/dp-dummy.png";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState('home');
  const [displayStyleLogin, setDisplayStyleLogin] = useState("d-none");
  const [cookies, setcookie, removecookie] = useCookies(["user"]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Desktop dropdown
  const [dropdownmobile, setDropdownMobile] = useState(false); // Mobile dropdown
  const [applydropdown, setapplydropdown] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Detect mobile view

  let navigate = useNavigate();

  useEffect(() => {
    if (cookies.user) {
      setDisplayStyleLogin("d-none");
    } else {
      setDisplayStyleLogin("d-block");
    }

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cookies]);

  function navitemclicked(e) {
    switch (e.target.id) {
      case "home":
        setIsMenuOpen("home");
        navigate("/");
        break;
      case "about":
        setIsMenuOpen("about");
        navigate("/about");
        break;
      case "services":
        setIsMenuOpen("services");
        navigate("/services");
        break;
      case "contact":
        setIsMenuOpen("contact");
        navigate("/contact");
        break;
      default:
        return null;
    }
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleMobileDropdown = () => {
    setDropdownMobile(!dropdownmobile);
  };

  const confirmationLetterclick = () => {
    navigate("/confirmationlatter");

  };
  return (
    <div>
      <header className="headerw">
        <div className="image-containers">
          <img src={logo} onClick={() =>navigate("/")} alt="Sailorswave logo" />
        </div>
        <nav className="text-center headernav">
          <span
            className="fw-medium"
            id="home"
            onClick={() => [navigate("/"),setIsMenuOpen('home')]}
            style={{ color: isMenuOpen === "home" ? "#F97D3D" : "black" }}

          >
            Home
          </span>
          <span
            className="fw-medium"
            id="about"
            onClick={() => [navigate('/about'),setIsMenuOpen('about')]}
            style={{ color: isMenuOpen === "about" ? "#F97D3D" : "black" }}
          >
            About
          </span>
          <span
            className="fw-medium"
            id="services"
            onClick={() => [navigate("/services"),setIsMenuOpen('services')]}
            style={{ color: isMenuOpen === "services" ? "#F97D3D" : "black" }}
          >
            Services
          </span>
          <span
            className="fw-medium"
            id="contact"
            onClick={() => [navigate('/contact'),setIsMenuOpen('contact')]}
            style={{ color: isMenuOpen === "contact" ? "#F97D3D" : "black" }}
          >
            Contact us
          </span>
          <span
            className="fw-medium"
            id="contact"
            onClick={() => [cookies.user ? navigate('/application') : navigate('/login'),setIsMenuOpen('applynow')]}
            style={{ color: isMenuOpen === "applynow" ? "#F97D3D" : "black" }}
          >
            ApplyNow
          </span>
        </nav>
        <div className="d-flex justify-content-end" onClick={() => cookies.user ? '' : navigate('/login')}>
          <span
            className={`${displayStyleLogin} d-flex login-button btn ms-4`}
            style={{ backgroundColor: "#F97D3D", borderRadius: "2rem" }}
          >
            <span>
              <button className="bi bi-person-fill text-light border rounded-circle bg-dark"></button>
            </span>
            <span className="text-light" style={{ marginLeft: "10px" }}>
              Login
            </span>
          </span>
          {cookies.user && (
            <div className="dropdown ms-4">
              <button
                className="btn d-flex align-items-center"
                onClick={toggleDropdown}
                style={{ backgroundColor: "#F97D3D", borderRadius: "2rem" }}
              >
                <span>
                  <img
                    src={dp}
                    alt="Profile"
                    className="pb-1 rounded-circle"
                    style={{ width: "2rem" }}
                  />
                </span>
                <span className="loginbtn text-light ms-2">
                  {cookies.user}
                  <span className="ms-2 bi bi-chevron-down"></span>
                </span>
              </button>
              {!isMobileView && dropdownVisible && (
                <div className="dropdown-menu show mt-2" onClick={()=>setDropdownVisible(false)}>
                  <div className="dropdown-item d-flex">
                    <span>
                      <img
                        src={dp}
                        alt="Profile"
                        className="rounded-circle me-2"
                        style={{ width: "40px" }}
                      />
                    </span>
                    <span className="align-content-center">
                      <div>{cookies.user}</div>
                    </span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" onClick={() => navigate("/application")}>Apply Now</div>
                  <div className="dropdown-item" onClick={() => navigate('/applicationletter')} >My Application</div>
                  <div className="dropdown-item" onClick={() => navigate('/myadmitcard')}>My Admit Cards</div>
                  <div className="dropdown-item" onClick={() => navigate('/selectionletterhead')}>Selection Letters</div>
                  <div className="dropdown-item" onClick={() => navigate('/documentsailorwave')} >Upload Docx</div>
                  <div className="dropdown-item" onClick={() => navigate('/confirmationletterhead')}>Confirmation Letters</div>
                  <div className="dropdown-divider"></div>
                  <div
                    className="bi bi-box-arrow-left dropdown-item text-danger"
                    onClick={() => removecookie('user')}
                  >
                    <span className="ms-1">Sign Out</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      {isMobileView && (
        <header className="headerr ">
          <div className="d-flex h-100 align-content-center">
            <div className="dropdown align-content-center" onClick={() => [setDropdownMobile(!dropdownmobile), setapplydropdown(false)]}>
              <span className="bi bi-list text-secondary"></span>
              {dropdownmobile && (
                <div className="dropdown-menu  text-dark show mt-4" style={{ width: "250px", left: 0 }}>
                  <div className="dropdown-item" id="home" onClick={() => navigate("/")}>Home</div>
                  <div className="dropdown-item" id="about" onClick={() => navigate('/about')}>About us</div>
                  <div className="dropdown-item" id="contact" onClick={() => navigate('/contact')}>Contact</div>
                  <div className="dropdown-item" id="services" onClick={() => navigate("/services")}>Our services</div>
                  <div className="dropdown-item" id="services" onClick={() => navigate("/application")}>Apply Now</div>
                  <div className="dropdown-item" >Login/Signup</div>
                </div>
              )}
            </div>
            <span className="h-100">
              <img src={logo} width={100} alt="Logo" />
            </span>
          </div>
          <div className="d-flex justify-content-end" onClick={() => cookies.user ? [setapplydropdown(!applydropdown), setDropdownMobile(false)] : navigate('/login')}>
            <span
              className="btnapply text-light d-flex login-button btn"
              style={{ backgroundColor: "#F97D3D", borderRadius: "2rem" }}
            >
              {(cookies.user) ? cookies.user : 'Apply now'}
            </span>
            {cookies.user && applydropdown && (
              <div className="dropdown-menu show mt-5">
                <div className="dropdown-item d-flex">
                  <span>
                    <img
                      src={dp}
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{ width: "40px" }}
                    />
                  </span>
                  <span className="align-content-center">
                    <div>{cookies.user}</div>
                  </span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" onClick={() => navigate("/application")}>Apply Now</div>
                <div className="dropdown-item" onClick={() => navigate('/applicationletter')} >My Application</div>
                <div className="dropdown-item" onClick={() => navigate('/myadmitcard')}>My Admit Cards</div>
                <div className="dropdown-item" onClick={() => navigate('/selectionletterhead')}>Selection Letters</div>
                <div className="dropdown-item" onClick={() => navigate('/documentsailorwave')} >Upload Docx</div>
                <div className="dropdown-item" onClick={() => navigate('/confirmationletterhead')}>Confirmation Letters</div>
                <div className="dropdown-divider"></div>
                <div
                  className="bi bi-box-arrow-left dropdown-item text-danger"
                  onClick={() => removecookie("user")}
                >
                  <span className="ms-1">Sign Out</span>
                </div>
              </div>
            )
            }
          </div>
        </header>
      )}
    </div>
  );
} 

