import React from "react";
import "./Material.css";
const Material = ({ list, handleChange, checked }) => {
  return (
    <label>
      <input
        type="checkbox"
        id="materialList"
        name={list}
        onChange={handleChange}
        data-cy={list}
        checked={checked}
      />
      {list}
    </label>
  );
};

export default Material;
