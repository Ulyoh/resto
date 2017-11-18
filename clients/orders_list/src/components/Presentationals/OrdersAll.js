import React, { Component } from 'react'
import OrdersByTable from './OrdersByTable'

class OrdersAll extends Component {
  render() {
    return(
      <div>
        {this.props.ordersList.map((table) =>
          table.show && <OrdersByTable key={table.table_nbr} table={table}/>)}
      </div>
    )
  }
}

export default OrdersAll
