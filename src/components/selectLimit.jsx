import React from "react";

const SelectLimit = (props) => {
  return (
    <select
      onChange={(e) => props.onLimitChange(e.target.value)}
      className="select"
    >
      <option value="5">5 Rows</option>
      <option value="10">10 Rows</option>
      <option value="15">15 Rows</option>
    </select>
  );
};

export default SelectLimit;
