import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import bg1 from '../../assets/image1.png'
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Lakshmi</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
            
          I am a skilled web designer with experience in creating <br/>visually
          appealing and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img className="btnImg" src={btnImg} alt="Hire Me"/>
              Hire Me
            
          </button>
        </Link>
      </div>
      {/* <img src={bg} alt="profile" className="bg" /> */}
      <img src={bg1} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
 