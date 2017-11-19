import React from 'react'

const FilterCheckboxLine = ({ title, hCBC, group_nbr, toShow }) =>

  <li role="presentation">
    {/*hCBC : handleCheckedBoxChange*/}
    <input onChange = {() => { hCBC(group_nbr) } } type="checkbox" aria-label="..." defaultChecked={toShow}/>
    {title}
  </li>

export default FilterCheckboxLine;
