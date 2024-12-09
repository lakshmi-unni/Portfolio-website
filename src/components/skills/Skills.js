import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Front-End Developer with 2+ years of experience specializing in building
        responsive web applications and interactive user interfaces using React
        JS, Next JS, and TypeScript. Proven track record of implementing
        scalable solutions that optimize performance and enhance user
        engagement. Adept at collaborating in fast-paced team environments and
        translating design mockups into functional, user-centric applications.
      </span>
      <div className="skillbars">
        <div className="skillbar">
            <img src={webDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React.js</h2>
                <p> Expert in developing scalable, dynamic single-page applications (SPAs) using React.js. Proficient in state management libraries like Redux and RTK Query for optimized workflows.</p>
            </div>
        </div>

        <div className="skillbar">
            <img src={UIDesign} alt="webDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Next.js</h2>
                <p>Skilled in building server-rendered React applications with improved SEO and performance, leveraging static site generation (SSG) and server-side rendering (SSR).</p>
            </div>
        </div>

        <div className="skillbar">
            <img src={appDesign} alt="appDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Angular.js</h2>
                <p>Basic familiarity with creating modular applications using Angular.js for front-end architecture.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
