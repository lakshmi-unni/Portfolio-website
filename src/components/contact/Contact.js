import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import Facebookicon from "../../assets/facebook-icon.png";
import Twittericon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7eg5x6j", "template_ndbilyq", form.current, "dDCb4SoysotyASlve",)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email Send !")
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of
          companies.some of the notable companies i have worked with includes
        </p>
        <div className="clientimgs">
          <img src={walmart} alt="" className="clientimg" />
          <img src={Adobe} alt="" className="clientimg" />
          <img src={Microsoft} alt="" className="clientimg" />
          <img src={Facebook} alt="" className="clientimg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5 "
            className="msg"
            placeholder="Your message"
          ></textarea>
          <button className="submitbtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <img src={Facebookicon} alt="" className="link" />
            <img src={Twittericon} alt="" className="link" />
            <img src={youtubeIcon} alt="" className="link" />
            <img src={InstagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
