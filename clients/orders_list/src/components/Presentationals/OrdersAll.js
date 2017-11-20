import React from 'react';
import OrdersByTable from './OrdersByTable';

const OrdersAll = ({ ordersList }) => (
  <div>
    {ordersList.map(table =>
        table.show && <OrdersByTable key={table.table_nbr} table={table} />)}
  </div>
);

export default OrdersAll;
