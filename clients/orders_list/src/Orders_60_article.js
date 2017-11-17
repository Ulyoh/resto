import React, { Component } from 'react';

class OrdersArticle extends Component {

  render() {
    var order = this.props.order;
    return(
      <tr id={'' + this.props.table_nbr + order.article_nbr} className="article">
        <td>
          <span className="qty"> {order.qty} </span>
          <span className="money"> </span>
          <span style={{margin: '7px'}} > {order.group} </span>
          <span style={{margin: '7px'}} > {order.article_title} </span>
          <button className="btn btn-default btn_less btn_change_qty" type="button"> - </button>
        </td>
      </tr>
    );
  }
}

export default OrdersArticle;
