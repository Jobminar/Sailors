
import './header.css';
import logo from "../../assets/Images/logo.png";

export function Header() {
    return (
        <>
            <div>
                <header>
                    <nav className="d-flex justify-content-between align-items-center py-3" style={{ padding: "0 5%" }}>
                        <div className="col-3 d-flex justify-content-start align-items-center">
                            <img src={logo} alt="Sailorswave logo" style={{ height: "80px" }} />
                        </div>
                        <div className="col-6 d-flex justify-content-around align-items-center text-dark">
                            <span className="fw-bold" style={{ color: "#F97D3D" }}>Home</span>
                            <span className="fw-bold">About</span>
                            <span className="fw-bold">Services</span>
                            <span className="fw-bold">Contact us</span>
                        </div>
                        <span className=" btn " style={{ backgroundColor: "#F97D3D", padding: "1vh 2vh 1vh 2vh", borderRadius: "3vh" }}>
                            <button className="bi bi-person-fill text-light border rounded-circle bg-dark"></button>
                            <span className=" fw-bold text-light ms-4">Login</span>
                        </span>
                    </nav>
                </header>
            </div>
        </>
    );
}
