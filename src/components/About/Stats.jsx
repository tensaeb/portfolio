/* eslint-disable react/prop-types */
// import parse from "html-react-parser";
// import { stats } from "../../data";

const Stats = ({ item }) => {
  return (
    <>
      <div className="stats_box">
        <h3 className="stats_no">{item.yoe}</h3>
        <p className="stats_title">
          Years of <br />
          Experience
        </p>
      </div>
      <div className="stats_box">
        <h3 className="stats_no">{item.completedProjects}</h3>
        <p className="stats_title">
          Projects <br />
          Completed
        </p>
      </div>
    </>
  );
};

export default Stats;
