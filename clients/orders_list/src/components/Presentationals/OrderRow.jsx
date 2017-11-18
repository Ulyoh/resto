import React from 'react';
import OrderRowButtons from './OrderRowButtons.jsx';

const OrderRow = ({ id, className, prepared, toBePrepared, group, article_title, buttonsProps }) =>

  <tr id={id} className={ className }>
    <td>
      <span className="toBePrepared"> {prepared +'/'+ toBePrepared} </span>
      <span className="money"> </span>
      <span style={{margin: '7px'}} > {group} </span>
      <span style={{margin: '7px'}} > {article_title} </span>

      <OrderRowButtons {...buttonsProps}/>
    </td>
  </tr>

export default OrderRow;
