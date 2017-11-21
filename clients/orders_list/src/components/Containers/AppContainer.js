import React, { Component } from 'react';
import App from '../Presentationals/App';

// TODO:0 remove:
import initOrdersList from '../../data/initState';
import initFilter from '../../data/orders_config_filter_default';
import { status } from '../../data/constants';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    // init the state:
    this.state = {
      filter: initFilter,
      ordersList: initOrdersList,
    };
    // this.updateState(initFilter, initOrdersList);

    this.handleCheckedBoxChange = this.handleCheckedBoxChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.setNewFilter = this.setNewFilter.bind(this);
  }

  setNewFilter(groupNbr) {
    const newFilter = this.state.filter;
    newFilter[groupNbr].show = !this.state.filter[groupNbr].show;
    return newFilter;
  }

  updateState(filter = this.state.filter, currentOrdersList = this.state.ordersList) {
    let newOrdersList = currentOrdersList;
    let showTable = false;
    let showOrder;

    newOrdersList = newOrdersList.map((table) => {
      table.show = false;

      table.orders.map((order) => {
        showOrder = true;
        switch (order.status) {
          case status.ORDERED:
            showOrder = filter[1003].show;
            break;
          case status.PREPARING:
            showOrder = filter[1002].show;
            break;
          case status.PREPARED:
            showOrder = filter[1001].show;
            break;
          case status.DELIVERED:
            showOrder = filter[1000].show;
            break;
          default:
        }

        order.show = showOrder && filter[order.groupNbr].show;
        showTable = showTable || order.show;
        return order;
      });

      table.show = showTable;
      showTable = false;
      return table;
    });

    return {
      filter,
      ordersList: newOrdersList,
    };
  }

  handleCheckedBoxChange(groupNbr) {
    const newFilter = this.setNewFilter(groupNbr);

    this.setState(this.updateState(newFilter));
  }

  render() {
    const showOrdersList = this.state.ordersList.reduce((pre, cur) => (pre && cur.show), true);

    const childrenProps = {
      filter: this.state.filter,
      handleCheckedBoxChange: this.handleCheckedBoxChange,
      ordersList: this.state.ordersList,
      showOrdersList,
    };
    return (
      <App {...childrenProps} />
    );
  }
}

export default AppContainer;
