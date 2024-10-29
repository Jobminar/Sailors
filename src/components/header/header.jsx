
import "./header.css";
import logo from "../../assets/Images/logo.png";
import dp from "../../assets/Images/dp-dummy.png";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState("home");
  const [displayStyleLogin, setDisplayStyleLogin] = useState("d-none");
  const [cookies, removecookie] = useCookies(["user"]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Desktop dropdown
  const [dropdownmobile, setDropdownMobile] = useState(false); // Mobile dropdown
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
  function mainlogoclicked() {
    navigate("/")
    setIsMenuOpen("home");
  }
  return (
    <div>
      <header className="headerw">
        <div>
          <img src={logo} onClick={mainlogoclicked} alt="Sailorswave logo" style={{ width: "100%" }} />
        </div>
        <nav className="text-center headernav">
          <span
            className="fw-medium"
            id="home"
            onClick={navitemclicked}
            style={{ color: isMenuOpen === "home" ? "#F97D3D" : "black" }}
          >
            Home
          </span>
          <span
            className="fw-medium"
            id="about"
            onClick={navitemclicked}
            style={{ color: isMenuOpen === "about" ? "#F97D3D" : "black" }}
          >
            About
          </span>
          <span
            className="fw-medium"
            id="services"
            onClick={navitemclicked}
            style={{ color: isMenuOpen === "services" ? "#F97D3D" : "black" }}
          >
            Services
          </span>
          <span
            className="fw-medium"
            id="contact"
            onClick={navitemclicked}
            style={{ color: isMenuOpen === "contact" ? "#F97D3D" : "black" }}
          >
            Contact us
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
                <div className="dropdown-menu show mt-2">
                  <div className="dropdown-item d-flex">
                    <span>
                      <img
                        src={dp}
                        alt="Profile"
                        className="rounded-circle me-2"
                        style={{ width: "40px" }}
                      />
                    </span>
                    <span>
                      <div>{cookies.user}</div>
                      <div className="text-secondary">9390373702</div>
                    </span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" onClick={() => navigate("/application")}>Apply Now</div>
                  <div className="dropdown-item" onClick={() => navigate('/applicationletter')} >My Application</div>
                  <div className="dropdown-item" onClick={() => navigate('/myadmitcard')}>My Admit Cards</div>
                  <div className="dropdown-item" onClick={() => navigate('/myresult')}>My Results</div>
                  <div className="dropdown-item">Selection Letters</div>
                  <div className="dropdown-item" onClick={() => navigate('/documentsailorwave')} >Upload Docx</div>
                  <div className="dropdown-item" onClick={confirmationLetterclick}>
                    Confirmation Letters
                  </div>
                  <div className="dropdown-divider"></div>
                  <div
                    className="bi bi-box-arrow-left dropdown-item text-danger"
                    onClick={() => removecookie("user")}
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
            <div className="dropdown">
              <span onClick={toggleMobileDropdown} className="bi bi-list"></span>
              {dropdownmobile && (
                <div className="dropdown-menu  text-dark show mt-4" style={{ width: "250px", left: 0 }}>
                  <div className="dropdown-item" id="home" onClick={navitemclicked}>Home</div>
                  <div className="dropdown-item" id="about" onClick={navitemclicked}>About us</div>
                  <div className="dropdown-item" id="contact" onClick={navitemclicked}>Contact</div>
                  <div className="dropdown-item" id="services" onClick={navitemclicked}>Our services</div>
                  <div className="dropdown-item" >Login/Signup</div>
                </div>
              )}
            </div>
            <span className="h-100">
              <img src={logo} width={100} alt="Logo" />
            </span>
          </div>
          <div className="d-flex justify-content-end" onClick={() => cookies.user ? '' : navigate('/login')}>
            <span
              className="btnapply text-light d-flex login-button btn"
              style={{ backgroundColor: "#F97D3D", borderRadius: "2rem" }}
            >
              Apply now
            </span>
            {dropdownmobile && (
              <div className="dropdown-menu show mt-2">
                <div className="dropdown-item d-flex">
                  <span>
                    <img
                      src={dp}
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{ width: "40px" }}
                    />
                  </span>
                  <span>
                    <div>{cookies.user}</div>
                    <div className="text-secondary">9390373702</div>
                  </span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" onClick={() => navigate("/application")}>Apply Now</div>
                <div className="dropdown-item" onClick={() => navigate('/applicationletter')} >My Application</div>
                <div className="dropdown-item" onClick={() => navigate('/myadmitcard')}>My Admit Cards</div>
                <div className="dropdown-item" onClick={() => navigate('/myresult')}>My Results</div>
                <div className="dropdown-item">Selection Letters</div>
                <div className="dropdown-item" onClick={() => navigate('/documentsailorwave')} >Upload Docx</div>
                <div className="dropdown-item" onClick={confirmationLetterclick}>
                  Confirmation Letters
                </div>
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
