import React from 'react'
import FilterCheckbox from './FilterCheckbox'

const FilterCheckboxLine = ({ title, hCBC, group_nbr, filter }) =>

  <li role="presentation">
    <FilterCheckbox
      hCBC = {hCBC}
      group_nbr = {group_nbr}
      filter = {filter}
    />
    {title}
  </li>

export default FilterCheckboxLine;
