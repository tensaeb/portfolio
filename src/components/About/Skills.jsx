/* eslint-disable react/prop-types */
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = ({ item }) => {
  return (
    <>
      <div className="progress_box">
        <div className="progress_circle">
          <CircularProgressbar
            strokeWidth={7.5}
            text={`${item.percentage}%`}
            value={item.percentage}
          />
        </div>
        <h3 className="skills_title">{item.title}</h3>
      </div>
    </>
  );
};

export default Skills;
