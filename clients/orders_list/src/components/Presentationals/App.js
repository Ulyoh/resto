import React from 'react';
import MyHeader from './MyHeader';
import OrdersAll from './OrdersAll';
import i18n from '../../data/i18n';

const App = ({ filter, handleCheckedBoxChange, ordersList }) =>

  <div>
    <div className = "container" >
      <MyHeader filter={filter}  handleCheckedBoxChange={handleCheckedBoxChange}/>
    </div>
    <div className = "container" >
      {(ordersList.show) ?
        (<OrdersAll ordersList={ordersList} />) : i18n.txt.noOrders}
    </div>
  </div>

export default App
