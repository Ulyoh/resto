import React, { Component } from 'react'
import OrdersTable from './Orders_30_table.js'

class Orders extends Component {
  render() {
    return(
      <div>
      {this.props.orders_list.map((table) =>
        <OrdersTable key={table.table_nbr} table={table} filter={this.props.filter} />)}
      </div>
    )
  }
}

export default Orders
