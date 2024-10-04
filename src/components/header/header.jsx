import "./header.css";
import logo from "../../assets/Images/logo.png";
import dp from "../../assets/Images/dp-dummy.png";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState("home");
  const [displayStyleLogin, setDisplayStyleLogin] = useState("d-none");
  const [cookies] = useCookies(["user"]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  let navigate = useNavigate();

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

  useEffect(() => {
    if (cookies.user) {
      setDisplayStyleLogin("d-none");
    } else {
      setDisplayStyleLogin("d-block");
    }
  }, [cookies]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="Sailorswave logo" style={{ width: "100%" }} />
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
        <div className="d-flex justify-content-end">
          <span
            className={`${displayStyleLogin} d-flex login-button btn ms-4`}
            style={{ backgroundColor: "#F97D3D", borderRadius: "2rem" }}
          >
            <span>
              <button className="bi bi-person-fill text-light border rounded-circle bg-dark"></button>
            </span>
            <span
              className="fw-medium text-light"
              style={{ marginLeft: "10px" }}
            >
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
                <span className="fw-medium text-light ms-2">
                  {cookies.user}{" "}
                  <span className="ms-2 bi bi-chevron-down"></span>
                </span>
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu show mt-2">
                  <div className="dropdown-item d-flex ">
                    <span>
                      <img
                        src={dp}
                        alt="Profile"
                        className="rounded-circle boeder-1 text-center me-2"
                        style={{ width: "40px" }}
                      />
                    </span>
                    <span>
                      <div>
                        <span>{cookies.user} </span>
                      </div>
                      <div>
                        <span className="text-secondary">9390373702</span>
                      </div>
                    </span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item">Apply Now</div>
                  <div className="dropdown-item">My Application</div>
                  <div className="dropdown-item">My Admit Cards</div>
                  <div className="dropdown-item">My Results</div>
                  <div className="dropdown-item">Selection Letters</div>
                  <div className="dropdown-item">Upload Docx</div>
                  <div className="dropdown-item">Confirmation Letters</div>
                  <div className="dropdown-divider"></div>
                  <div className="bi bi-box-arrow-left dropdown-item text-danger">
                    <span className="ms-1">Sign Out</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
