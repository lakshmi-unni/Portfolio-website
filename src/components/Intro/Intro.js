import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import bg1 from '../../assets/image1.png'
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Lakshmi_Unni_CV.pdf'; // Replace with your resume path
    link.download = 'Lakshmi_Unni_CV.pdf'; // Optional: specify the file name
    link.click();
};
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Lakshmi Unni</span>
          <br />
         
        </span>
        <span className="designation"> Front-End Developer</span>
        <p className="introPara">
            
          I am a skilled web designer with experience in creating <br/>visually
          appealing and user friendly websites
        </p>
        {/* <Link > */}
         <div>
         <button className="btn" onClick={handleDownloadResume}>
            <img className="btnImg" src={btnImg} alt="Hire Me"/>
              Hire Me
            
          </button>
         </div>
        {/* </Link> */}
      </div>
      {/* <img src={bg} alt="profile" className="bg" /> */}
      <img src={bg1} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
 