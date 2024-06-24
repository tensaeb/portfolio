/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import parse from "html-react-parser";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { resume } from "../../data";
import parse from "html-react-parser";

const ResumeItem = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="resume_item">
        <div className="resume_icon">{item.icon}</div>
        <span className="resume_date">{item.year}</span>
        <h3 className="resume_subtitle">{parse(item.title)}</h3>
        <p className="resume_description">{item.desc}</p>
      </div>
    </>
  );
};

export default ResumeItem;
