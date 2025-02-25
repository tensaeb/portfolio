// component
import Info from "../../components/About/Info";
// import CV from "../../assets/CV.pdf";
import Stats from "../../components/About/Stats";
import Skills from "../../components/About/Skills";
// css
import "./about.css";
import ResumeItem from "../../components/About/ResumeItem";

import Socials from "../../components/About/Socials";
import { resume } from "../../data";
import { skills } from "../../data"; // Import the skills array

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>
        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Info</h3>
            <ul className="info_list grid">
              <Info />
            </ul>
            <div className="contact_socials">
              <Socials />
            </div>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section_subtitle subtitle_center">
          Experience & Education
        </h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {resume.map((item) => {
              console.log(item);
              if (item.category === "experience") {
                return <ResumeItem key={item.id} item={item} />;
              }
            })}
          </div>
          <div className="resume_data">
            {resume.map((item) => {
              if (item.category === "education") {
                return <ResumeItem key={item.id} item={item} />;
              }
            })}
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>
        <div className="skills_container grid">
          <Skills skills={skills} /> {/* Pass skills as prop */}
        </div>
      </section>
    </main>
  );
};

export default About;
