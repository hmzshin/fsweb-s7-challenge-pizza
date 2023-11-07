import React from "react";
const Material = ({ list, handleChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        id="materialList"
        name={list}
        onChange={handleChange}
        data-cy={list}
      />
      {list}
    </label>
  );
};

export default Material;
