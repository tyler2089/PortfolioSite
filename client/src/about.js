import "./about.css";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
function About() {
  return (
    <div className="about-container">
      {/* React Reveal Library! */}
      <Slide right>
        <h1 id="about-title">ABOUT</h1>
      </Slide>
      <Flip left cascade>
        <div className="about-me">
          <div className="icon-container">
            <img src={require("./fast-icon.jpg")}></img>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>

          <div className="icon-container">
            <img src={require("./responsive-icon.jpg")}></img>
            <h2>Responsive</h2>
            <p>My layouts will work on any device, big or small.</p>
          </div>

          <div className="icon-container">
            <img src={require("./dynamic-icon.jpg")}></img>
            <h2>Dynamic</h2>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
      </Flip>

      <section className="headshot-section">
        <Slide left cascade>
          <div className="headshot-container">
            <img src={require("./tyler.jpeg")}></img>
            <h2>Who's this guy?</h2>
            <p>
              Hello, I'm Tyler. I'm a full-stack developer in Tacoma, WA. I have
              a serious passion for web development and user experiences.
            </p>
            <p id="link">Let's make something special together.</p>
          </div>
        </Slide>
        <Slide right>
          <div className="skills-container">
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>JavaScript</h2>
            <h2>React</h2>
            <h2>Redux</h2>
            <h2>Node.js</h2>
          </div>
        </Slide>
      </section>
    </div>
  );
}

export default About;
