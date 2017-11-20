import React from 'react';

const FilterCheckboxLine = ({
  title, hCBC, groupNbr, toShow,
}) => (

  <li role="presentation">
    {/* hCBC : handleCheckedBoxChange */}
    <input
      onChange={() => { hCBC(groupNbr); }}
      type="checkbox"
      aria-label="..."
      defaultChecked={toShow}
    />
    {title}
  </li>);

export default FilterCheckboxLine;
