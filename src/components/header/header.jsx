import "./header.css";
import logo from "../../assets/Images/logo.png";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState("home");
  const [navitemclr] = useState("#F97D3D");

  function navitemclicked(e) {
    switch (e.target.id) {
      case "home":
        setIsMenuOpen("home");
        break;
      case "about":
        setIsMenuOpen("about");
        break;
      case "services":
        setIsMenuOpen("services");

        break;
      case "contact":
        setIsMenuOpen("contact");
        break;
      default:
        return null;
    }
  }
  return (
    <>
      <div>
        <header>
          <div>
            <img src={logo} alt="Sailorswave logo" style={{ width: "100%" }} />
          </div>
          <nav className="text-center headernav">
            <Link className="link" to="/">
              <span
                className="fw-medium "
                id="home"
                onClick={navitemclicked}
                style={{ color: isMenuOpen === "home" ? navitemclr : "black" }}
              >
                Home
              </span>
            </Link>

            <Link className="link" to="/about">
              <span
                className="fw-medium "
                id="about"
                onClick={navitemclicked}
                style={{ color: isMenuOpen === "about" ? navitemclr : "black" }}
              >
                About
              </span>
            </Link>

            <Link className="link" to="/services">
              <span
                className="fw-medium "
                id="services"
                onClick={navitemclicked}
                style={{
                  color: isMenuOpen === "services" ? navitemclr : "black",
                }}
              >
                Services
              </span>
            </Link>
            <Link className="link" to="/contact">
              <span
                className="fw-medium "
                id="contact"
                onClick={navitemclicked}
                style={{
                  color: isMenuOpen === "contact" ? navitemclr : "black",
                }}
              >
                Contact us
              </span>
            </Link>
          </nav>
          <div className="d-flex justify-content-end">
            <span
              className=" btn ms-4"
              style={{
                backgroundColor: "#F97D3D",
                padding: ".5rem 1rem .5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <button className="bi bi-person-fill text-light border rounded-circle bg-dark"></button>
              <span
                className=" fw-medium text-light "
                style={{ marginLeft: "10px" }}
              >
                Login
              </span>
            </span>
          </div>
        </header>
      </div>
    </>
  );
}
