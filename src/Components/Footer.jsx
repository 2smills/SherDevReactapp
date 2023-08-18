import "./Footer.css";
import { EnvelopeFill } from "react-bootstrap-icons";
import UniversityLogo from "../Icons/nobg.png"; 
import SecondImage from "../Icons/nobgit.png"; 

const Footer = () => {
  return (
    <>
      <div className="footer text-white d-flex flex-column justify-content-center align-items-center">
        <div className="logo-container">
          <img src={UniversityLogo} alt="University Logo" className="university-logo" />
          <img src={SecondImage} alt="Second Image" className="second-image" />
        </div>
        <p>College of Information Technology</p>
        <h2>Phinma- University of Pangasinan</h2>
        <div className="contact-me">
          <EnvelopeFill className="contact-icon" color="white" size={24} />
          <p>Contact Me: <a href="mailto:shso.lopez.up@phinmaed.com">shso.lopez.up@phinmaed.com</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
