import "./projects.css";
import { useState, useEffect, useRef } from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

function Projects() {
  const [highlight, setHighlight] = useState("all");
  const allRef = useRef(null);
  const reactRef = useRef(null);
  const modalRef = useRef(null);
  const modalBackgroundRef = useRef(null);
  useEffect(() => {
    if (highlight === "all") {
      allRef.current.className = "highlighted";
      reactRef.current.className = "not-highlighted";
    } else if (highlight === "react") {
      reactRef.current.className = "highlighted";
      allRef.current.className = "not-highlighted";
    }
  }, [highlight]);

  const Images = () => {
    if (highlight === "all") {
      return (
        <Slide bottom>
          <div className="images-container">
            <div className="card">
              <img src={require("./harmony-hub-image1.PNG")}></img>
              <div className="overlay">
                <div className="top-text">
                  <h2>Harmony Hub</h2>
                  <h3>React JS / React-Redux</h3>
                </div>
                <div className="bottom-text">
                  <h2
                    onClick={() => {
                      modalRef.current.className = "modal";
                      modalBackgroundRef.current.className = "modal-background";
                    }}
                  >
                    LEARN MORE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      );
    } else if (highlight === "react") {
      return (
        <Slide bottom>
          <div className="images-container">
            <div className="card">
              <img src={require("./harmony-hub-image1.PNG")}></img>
              <div className="overlay">
                <div className="top-text">
                  <h2>Harmony Hub</h2>
                  <h3>React JS / React-Redux</h3>
                </div>
                <div className="bottom-text">
                  <h2
                    onClick={() => {
                      modalRef.current.className = "modal";
                      modalBackgroundRef.current.className = "modal-background";
                    }}
                  >
                    LEARN MORE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      );
    }
  };

  const Modal = () => {
    return (
      <div ref={modalRef} className="not-modal">
        <img
          className="modal-image"
          src={require("./harmony-hub-image2.PNG")}
        ></img>
        <div className="modal-title">
          <h1>HarmonyHub</h1>
          <h3>Spotify Clone</h3>
        </div>
        <div className="modal-description">
          <p>
            Harmony Hub is a dynamic music streaming platform, meticulously
            crafted with HTML, CSS, JavaScript, React, and Redux, offering users
            an immersive and personalized audio experience that resonates with
            their unique musical preferences.
          </p>
        </div>
        <div className="modal-buttons">
          <h2>View Site</h2>
          <h2
            onClick={() => {
              modalRef.current.className = "not-modal";
              modalBackgroundRef.current.className = "not-modal-background";
            }}
          >
            X
          </h2>
        </div>
      </div>
    );
  };
  return (
    <div id="projects" className="projects-container">
      <div ref={modalBackgroundRef} className="not-modal-background"></div>
      <Modal></Modal>
      <Slide left>
        <h1>Projects</h1>
      </Slide>
      <Bounce right>
        <div className="project-types">
          <h3 ref={allRef} onClick={() => setHighlight("all")}>
            ALL
          </h3>
          <h3 ref={reactRef} onClick={() => setHighlight("react")}>
            REACT
          </h3>
        </div>
      </Bounce>
      <Images></Images>
    </div>
  );
}

export default Projects;
