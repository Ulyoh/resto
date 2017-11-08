import React, {
  Component
} from 'react';
import './App.css';
import MyHeader from './MyHeader';

//TODO: remove:
import Orders from './test_orders.js'

class App extends Component {
  render() {
    return (
      <div>
        <div class = "container" >
          <MyHeader />
        </div>
        <div id = "order_list"
        class = "container" >
        </div>
      </div>
    );
  }
}

export default App;

/*
<
div class = "container" > {
  {
    {
      body
    }
  }
} <
/div> <
div id = "order_list"
class = "container" >
<
/div>
*/
