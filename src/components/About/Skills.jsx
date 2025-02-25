/* eslint-disable react/prop-types */
import { skills } from "../../data";

const Skills = () => {
  return (
    <>
      {skills &&
        skills.map((skill) => {
          return (
            <div key={skill.id} className="skills_box">
              <img
                src={skill.iconLink}
                alt={skill.title}
                className="skills_icon"
              />
              <h3 className="skills_title">{skill.title}</h3>
            </div>
          );
        })}
    </>
  );
};

export default Skills;
