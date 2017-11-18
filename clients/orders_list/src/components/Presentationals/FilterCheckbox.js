import React from 'react';

const CheckBox = ({ hCBC, group_nbr, filter }) =>
  // hCBC : handleCheckedBoxChange
  <input onChange = {() => { hCBC(group_nbr) } } type="checkbox" aria-label="..." defaultChecked={filter[group_nbr].show}/>

export default CheckBox;
