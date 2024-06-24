/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { stats } from "../../data";
import CV from "../../assets/CV.pdf";

import { FaDownload } from "react-icons/fa";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats_box" key={index}>
            <h3 className="stats_no">{no}</h3>
            <p className="stats_title">{parse(title)}</p>
          </div>
        );
      })}

      <a
        href={CV}
        download=""
        // href="https://firebasestorage.googleapis.com/v0/b/portfolio-44b69.appspot.com/o/CV%2FEUROPASS%20CV.pdf?alt=media&token=38bcca10-882a-48fe-83da-df2b3f362000"
        className="button"
      >
        Download CV
        <span className="button_icon">
          <FaDownload />
        </span>
      </a>
    </>
  );
};

export default Stats;
