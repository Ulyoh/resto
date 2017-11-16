import React, {
  Component
} from 'react';
import './App.css';
import MyHeader from './MyHeader';
import Orders from './Orders_00.js';

//TODO: remove:
import OrdersList from './data/test_orders.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {orders_list: OrdersList};
  }
  render() {
    return (
      <div>
        <div className = "container" >
          <MyHeader />
        </div>
        <div className = "container" >
          <Orders orders_list={this.state.orders_list} />
        </div>
      </div>
    );
  }
}

export default App;
