import "./NavBar.css";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Facebook } from "react-bootstrap-icons";


const NavBar = () => {
  return (
    <div className="nav-unreal fixed-top mb-5 py-2">
      <div className="container d-flex justify-content-between nav-real">
        <ul className="d-flex justify-content-between text-center list-unstyled nav-main ">
        <li className="">
  <a className="a main-name" href="https://matias.ma/nsfw/" target="_blank" rel="noopener noreferrer">
    CLICK HERE
          </a>
        </li>
          <li>
            <Link className="a other" to="/work">
              Work
            </Link>
          </li>
          <li>
            <Link className="a other" to="/education">
              Education
            </Link>
          </li>
        </ul>

        <div className="icon nav-other pt-1">
  <a
    href="https://github.com/2smill"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="icons" color="#000" size={30} />
  </a>
  <a
    href="https://twitter.com/asasfaweweasda"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="icons" color="#00A0DC" size={30} />
  </a>
  <a
    href="https://www.linkedin.com/in/sherwin-soler-lopez-665340253/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="icons" color="#0077B5" size={30} />
  </a>
  <a
    href="https://www.facebook.com/Sherwin08ll/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook className="icons" color="blue" size={30} />
  </a>
</div>

      </div>
    </div>
  );
};

export default NavBar;
