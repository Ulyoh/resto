import React, { Component } from 'react';
import './App.css';
import MyHeader from './MyHeader';
import Orders from './Orders_00.js';

//TODO: remove:
import ordersList from './data/test_orders.js'
import filter from './data/orders_config_filter_default.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders_list: ordersList,
      filter: filter,
    };
    this.handleCheckedBoxChange = this.handleCheckedBoxChange.bind(this);
  }

  handleCheckedBoxChange(group_nbr) {
    const newFilter = this.state.filter;
    newFilter[group_nbr].show = !this.state.filter[group_nbr].show;
    this.setState({ filter: newFilter });
  }

  render() {
    return(
      <div>
        <div className = "container" >
          <MyHeader filter={filter}  handleCheckedBoxChange={this.handleCheckedBoxChange}/>
        </div>
        <div className = "container" >
          <Orders orders_list={this.state.orders_list} filter = {this.state.filter}/>
        </div>
      </div>
    );
  }
}

export default App;
