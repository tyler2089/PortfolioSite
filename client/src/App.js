import "./App.css";
import { useRef, useEffect } from "react";
import { CanvasSpace, Pt, Line, Group, Tempo } from "pts";
import Navbar from "./navbar.js";
import About from "./about.js";
import Projects from "./projects.js";
import Contact from "./contact";
// Canvas Space Initialization and Styling
let space = new CanvasSpace("canvas");
let form = space.getForm();
space.setup({ bgcolor: "rgba(37, 41, 52, 255)", resize: false });

// Generate Pts and Line
let pts = [];
let colors = [];
let opacity = [];
let count = window.innerWidth * 0.05;
var center = space.size.$divide(1.8);

// If screen is very wide, do not generate more than 150 points
if (count > 150) {
  count = 150;
}

console.log(window.innerHeight);
// Assign pts to a position, randomize the colors of the points, and initialize opacity
for (let i = 0; i < count; i++) {
  pts[i] = new Pt({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  colors[i] = {
    red: Math.random() * 255,
    blue: Math.random() * 255,
    green: Math.random() * 255,
  };

  opacity[i] = 0.1;
}

// Carousel Animation
space.add({
  start: (bound, space) => {},
  animate: (time, ftime, space) => {
    for (var i = 0; i < pts.length; i++) {
      var pt = pts[i];
      var ln = Line.fromAngle(pt, 200, 10000);
      var distanceFromMouse = Line.distanceFromPt(ln, space.pointer);

      if (distanceFromMouse < 50) {
        if (opacity[i] < 0.3) {
          opacity[i] = opacity[i] + 0.01;
        }
      } else {
        if (opacity[i] > 0.1) {
          opacity[i] = opacity[i] - 0.01;
        }
      }
      pt.rotate2D(0.5 / 360, space.center);

      var color = "rgba(255,255,255," + opacity[i] + ")";
      form.stroke(color).line(ln);
      form
        .fill(
          "rgba(" +
            colors[i].red +
            "," +
            colors[i].blue +
            "," +
            colors[i].green +
            ",255)"
        )
        .point(pt, 1);
    }
  },
});
space.bindMouse().play();
function App() {
  return (
    <div>
      {/* Text over Canvas Carousel*/}
      <div className="intro-text-container">
        <h1>
          Hello, I'm <span className="highlight">Tyler Purbaugh</span>.
        </h1>
        <h1>I'm a full-stack web developer.</h1>
        <div className="button">
          <a href="#projects">
            View My Work <span className="arrow">&#8594;</span>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar></Navbar>

      {/* About */}
      <About></About>

      {/* Projects */}
      <Projects></Projects>

      {/* Contact */}
      <Contact></Contact>
    </div>
  );
}

export default App;
