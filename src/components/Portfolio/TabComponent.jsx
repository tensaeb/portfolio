/* eslint-disable react/prop-types */
// import { useState } from "react";

const TabComponent = ({ item, active, onClick }) => {
  const isActive = item.title === active; // Determine if this tab is active

  return (
    <button
      className={`button tab ${isActive ? "active" : ""}`} // Use isActive boolean
      onClick={onClick}
    >
      {item.title}
    </button>
  );
};

export default TabComponent;
