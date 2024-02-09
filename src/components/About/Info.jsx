/* eslint-disable react/prop-types */
import moment from "moment";
// import { personalInfo } from "../../data";

const Info = ({ item }) => {
  return (
    <>
      {/* {personalInfo.map(({ title, description }, index) => { */}
      {/* return ( */}
      <li className="info_item">
        <span className="info_title">First Name: </span>
        <span className="info_description">{item.firstName}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Middle Name: </span>
        <span className="info_description">{item.middleName}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Last Name: </span>
        <span className="info_description">{item.lastName}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Date of Birth: </span>
        <span className="info_description">{moment(item.dob).format("L")}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Address: </span>
        <span className="info_description">{item.address}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Phone: </span>
        <span className="info_description">{item.phone}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Email: </span>
        <span className="info_description">{item.email}</span>
      </li>
      <li className="info_item">
        <span className="info_title">Skype: </span>
        <span className="info_description">{item.skype}</span>
      </li>

      {/* ); */}
      {/* })} */}
    </>
  );
};

export default Info;
