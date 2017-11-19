import React, { Component } from 'react';
import App from '../Presentationals/App'

//TODO: remove:
import ordersList from '../../data/test_orders'
import filter from '../../data/orders_config_filter_default'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    var ordersListSetted = this.setShowValues(ordersList, filter);

    this.handleCheckedBoxChange = this.handleCheckedBoxChange.bind(this);
    this.setShowValues = this.setShowValues.bind(this);
    this.setNewFilter = this.setNewFilter.bind(this);

    this.state = {
      filter: filter,
      ordersList: ordersListSetted,
    }
  }

  setNewFilter(group_nbr) {
    const newFilter = this.state.filter;
    newFilter[group_nbr].show = !this.state.filter[group_nbr].show;
    return newFilter;
  }

  setShowValues(currentOrderList, filter) {
    var newOrdersList = currentOrderList;
    var showTable = false,
      showOrdersList = false;

    newOrdersList = newOrdersList.map(table => {
      table.show = false;
      table.orders.map(order => {
        order.show = true;

        //filtred by delivered
        if(!filter[1000].show && order.delivered)
          order.show = false;

        //filtred by prepared
        else if(!filter[1001].show && order.prepared)
          order.show = false;

        //filtred by to do now
        else if(!filter[1002].show && order.preparing)
          order.show = false;

        //filtred by to do later
        else if(!filter[1003].show && (!order.delivered && !order.prepared && !order.preparing))
          order.show = false;

        order.show = order.show && filter[order.group_nbr].show;

        showTable |= order.show;
        showOrdersList |= showTable;
        return order;
      })

      table.show = showTable;
      showTable = false;
      return table;
    });
    newOrdersList.show = showOrdersList;

    return newOrdersList;
  }

  handleCheckedBoxChange(group_nbr) {
    const newFilter = this.setNewFilter(group_nbr);
    const newOrdersList = this.setShowValues(ordersList, newFilter);

    this.setState({
      filter: newFilter,
      ordersList: newOrdersList,
    });
  }

  render() {
    const childrenProps = {
      filter: filter,
      handleCheckedBoxChange: this.handleCheckedBoxChange,
      ordersList: this.state.ordersList,
    }
    return(
      <App {...childrenProps}/>
    );
  }
}

export default AppContainer;
