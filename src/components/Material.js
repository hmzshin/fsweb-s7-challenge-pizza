import React from "react";
const Material = ({ list, handleChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        id="materialList"
        name={list}
        value={list}
        onChange={handleChange}
      />
      {list}
    </label>
  );
};

export default Material;
