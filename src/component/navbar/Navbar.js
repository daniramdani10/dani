import "./navbar.css";
import {
  FaEnvelopeSquare,
  FaHome,
  FaInfoCircle,
  FaTasks,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="nav">
        <a href="#home">
          <FaHome className="icons" />
          Home
        </a>
        <a href="#about">
          <FaInfoCircle className="icons" />
          About
        </a>
        <a href="#portfolio">
          <FaTasks className="icons" />
          Portfolio
        </a>
        <a href="#contact">
          <FaEnvelopeSquare className="icons" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
