import React from 'react';

const Button = ({ onClick, disabled = false, txt }) =>
  <button onClick={onClick} className="btn btn-default btn_less btn_change_toBePrepared" type="button" disabled={disabled}> {txt} </button>;

export default Button;
