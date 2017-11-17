import React, { Component } from 'react'
import OrdersArticle from './Orders_60_article.js'

class OrdersTable extends Component {
  render() {
    var table = this.props.table;
    //var filter = this.props.filter;
    return(
      <div className="container hero next food_list">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h1 className="text-center food_list_title"> {table.table_nbr} </h1></th>
              </tr>
            </thead>
            <tbody>
              {table.orders.map((order) =>
                order.show &&
                <OrdersArticle key={'' + table.table_nbr + order.article_nbr} order={order} table_nbr={table.table_nbr} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default OrdersTable;
