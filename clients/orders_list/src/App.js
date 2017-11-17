import React, { Component } from 'react';
import './App.css';
import MyHeader from './MyHeader';
import Orders from './Orders_00.js';
import i18n from './data/i18n.js';

//TODO: remove:
import ordersList from './data/test_orders.js'
import filter from './data/orders_config_filter_default.js'

class App extends Component {
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
        order.show = filter[order.group_nbr].show;
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
    return(
      <div>
        <div className = "container" >
          <MyHeader filter={filter}  handleCheckedBoxChange={this.handleCheckedBoxChange}/>
        </div>
        <div className = "container" >
          {this.state.ordersList.show ?
            (<Orders ordersList={this.state.ordersList} />) : i18n.txt.noOrders}
        </div>
      </div>
    );
  }
}

export default App;
