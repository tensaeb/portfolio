/* eslint-disable react/prop-types */
// import { useState } from "react";

const TabComponent = ({ item, active, onClick }) => {
  return (
    <button
      className={`button tab ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {item.title}
    </button>
  );
};

export default TabComponent;
