/* eslint-disable react/prop-types */
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../../data";

const Skills = () => {
  return (
    <>
      {skills &&
        skills.map((skill) => {
          return (
            <div key={skill.id} className="progress_box">
              <div className="progress_circle">
                <CircularProgressbar
                  strokeWidth={7.5}
                  text={`${skill.percentage}%`}
                  value={skill.percentage}
                />
              </div>
              <h3 className="skills_title">{skill.title}</h3>
            </div>
          );
        })}
    </>
  );
};

export default Skills;
