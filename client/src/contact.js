import "./contact.css";
import Slide from "react-reveal/Slide";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
emailjs.init("6wjp3mEAhCCK5ZMs4");
function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function sendEmail() {
    if (nameRef.current.value === "") {
      alert("Please provide a name in the Contact Form");
      return;
    }

    if (emailRef.current.value === "") {
      alert("Please provide an email in the Contact Form");
      return;
    }

    if (messageRef.current.value === "") {
      alert("Please provide a message in the Contact Form");
      return;
    }
    var templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    emailjs.send("service_epwjtyj", "template_f84f6bn", templateParams).then(
      function (response) {
        alert("Email Sent Successfully!");
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
  }
  return (
    <div className="contact-container" id="contact">
      <Slide right>
        <h1>Contact</h1>
      </Slide>
      <Slide left>
        <h3>Have a question or want to work together?</h3>
      </Slide>
      <Slide right cascade>
        <div className="contact-form">
          <input
            ref={nameRef}
            className="input"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            ref={emailRef}
            className="input"
            type="text"
            placeholder="Email"
            required
          ></input>
          <textarea
            ref={messageRef}
            className="input"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
      </Slide>
      <Slide left>
        <div className="submit-button">
          <h2 onClick={() => sendEmail()}>Submit</h2>
        </div>
      </Slide>
    </div>
  );
}

export default Contact;
