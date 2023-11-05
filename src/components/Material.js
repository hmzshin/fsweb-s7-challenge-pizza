import React from "react";
const Material = ({ list }) => {
  return (
    <label>
      <input type="radio" value={list} />
      {list}
    </label>
  );
};

export default Material;
