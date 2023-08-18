import { Github } from "react-bootstrap-icons";
import Picture from "../Images/Sherwin.jpg";
import "./Home.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Home = () => {
  return (
    <div className="container mt-5 row">
      <div className="col-md-8 text-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`animate__animated ${
                isVisible ? "animate__delay-2s animate__fadeInLeft" : ""
              }`}
            >
              <div className="text-left fade-in-left animated home-text py-5">
                <h4 className="text-primary pt-5 fs-2"></h4>
                <h3 className="text-primary pt-1 fs-1">
                  I am Sherwin Lopez.
                </h3>
                <h2 className="pt-1 fs-1 ">
                  Frontend Web Developer <br /> "Lets Make Our Dreams Into Reality"{" "}
                  <br />
                </h2>
                <div
                  className={`animate__animated ${
                    isVisible ? "animate__delay-3s animate__bounce" : ""
                  }`}
                >
                  <div className="icon pt-3">
                    <a
                      href="https://github.com/2smill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="icons" color="#000" size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>

      <div className="col-md-4 text-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`animate__animated ${
                isVisible ? "animate__fadeInRight" : ""
              }`}
            >
              <div
                className={`py-5 ${
                  isVisible
                    ? "animate__animated animate__delay-1s animate__fire"
                    : "animate__fadeOutUp"
                }`}
              >
                <img
                  src={Picture}
                  className="rounded-circle"
                  style={{ width: "400px", height: "400px" }}
                  alt=""
                />
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Home;
