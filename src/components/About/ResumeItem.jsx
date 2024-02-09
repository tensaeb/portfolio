/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import parse from "html-react-parser";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ResumeItem = ({ item }) => {
  return (
    <div className="resume_item">
      <div className="resume_icon">
        {item.category === "education" ? <FaGraduationCap /> : <FaBriefcase />}
      </div>

      <span className="resume_date">{item.year}</span>
      <h3 className="resume_subtitle">
        {item.title} - {item.where}
      </h3>
      <p className="resume_description">{item.description}</p>
    </div>
  );
};

export default ResumeItem;
