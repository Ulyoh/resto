import React from 'react';
import OrderRowButtons from './OrderRowButtons';

const OrderRow = ({
  id, className, done, toDo, groupTitle, articleTitle, buttonsProps,
}) => (
  <tr id={id} className={className}>
    <td>
      <span className="toBePrepared"> {`${done}/${toDo}`} </span>
      <span className="money" />
      <span style={{ margin: '7px' }} > {groupTitle} </span>
      <span style={{ margin: '7px' }} > {articleTitle} </span>

      <OrderRowButtons {...buttonsProps} />
    </td>
  </tr>);

export default OrderRow;
