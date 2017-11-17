import React, { Component } from 'react'
import OrdersTable from './Orders_30_table.js'

class Orders extends Component {
  render() {
    return(
      <div>
      {this.props.ordersList.map((table) =>
        table.show && <OrdersTable key={table.table_nbr} table={table}/>)}
      </div>
    )
  }
}

export default Orders
