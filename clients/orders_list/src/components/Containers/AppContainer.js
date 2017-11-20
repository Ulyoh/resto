import React, { Component } from 'react';
import App from '../Presentationals/App';

// TODO:0 remove:
import initOrdersList from '../../data/test_orders';
import initFilter from '../../data/orders_config_filter_default';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    // init the state:
    this.state = this.updateState(initFilter, initOrdersList);

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
    let showOrdersList = false;

    newOrdersList = newOrdersList.map((table) => {
      table.show = false;
      table.orders.map((order) => {
        order.show = true;

        if (!filter[1000].show && order.delivered) {
          order.show = false; // filtred by delivered
        } else if (!filter[1001].show && order.prepared) {
          order.show = false; // filtred by prepared
        } else if (!filter[1002].show && order.preparing) {
          order.show = false;// filtred by to do now
        } else if (!filter[1003].show &&
          (!order.delivered && !order.prepared && !order.preparing)) {
          order.show = false;// filtred by to do later
        }

        order.show = order.show && filter[order.groupNbr].show;

        showTable = showTable || order.show;
        showOrdersList = showOrdersList || showTable;
        return order;
      });

      table.show = showTable;
      showTable = false;
      return table;
    });
    newOrdersList.show = showOrdersList;


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
    const childrenProps = {
      filter: this.state.filter,
      handleCheckedBoxChange: this.handleCheckedBoxChange,
      ordersList: this.state.ordersList,
    };
    return (
      <App {...childrenProps} />
    );
  }
}

export default AppContainer;
