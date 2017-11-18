import React, { Component } from 'react';
import OrderRow from '../Presentationals/OrderRow'

class OrdersRowContainer extends Component {
  constructor(props) {
    super(props);

    this.allPrepared = this.allPrepared.bind(this);
    this.onePrepared = this.onePrepared.bind(this);
    this.oneNotAlreadyPrepared = this.oneNotAlreadyPrepared.bind(this);

    this.state = {
      allPrepared: false,
      toBePrepared: this.props.order.toBePrepared,
      prepared: this.props.order.prepared,
    };
  }

  allPrepared() {
    const newState = Object.assign(this.state, { allPrepared: true, prepared: this.state.toBePrepared + '' });

    this.setState(newState);
  };

  onePrepared() {
    const prepared = +this.state.prepared < +this.state.toBePrepared ? +this.state.prepared + 1 : +this.state.toBePrepared;
    const allPrepared = (prepared >= this.state.toBePrepared);
    const newState = Object.assign(this.state, { allPrepared: allPrepared, prepared: prepared + '' });

    this.setState(newState);
  };

  oneNotAlreadyPrepared() {
    const prepared = +this.state.prepared > 0 ? +this.state.prepared - 1 : 0;
    const allPrepared = false;
    const newState = Object.assign(this.state, { allPrepared: allPrepared, prepared: prepared + '' });

    this.setState(newState);
  };

  render() {
    const order = this.props.order;
    const disabledWhenAllPrepared = this.state.allPrepared ? "disabled" : false;
    const TrClassName = "article " + (this.state.allPrepared ? "success" : "");
    const disabledWhenNonePrepared = this.state.prepared <= 0 ? "disabled" : false;

    const buttonsProps = {
      allPrepared: this.allPrepared,
      onePrepared: this.onePrepared,
      oneNotAlreadyPrepared: this.oneNotAlreadyPrepared,
      disabledWhenAllPrepared: disabledWhenAllPrepared,
      disabledWhenNonePrepared: disabledWhenNonePrepared,
    }

    const childrenProps = {
      id: '' + this.props.table_nbr + order.article_nbr,
      className: TrClassName,
      prepared: this.state.prepared,
      toBePrepared: order.toBePrepared,
      group: order.group,
      article_title: order.article_title,
      buttonsProps: buttonsProps,
    }

    return(<OrderRow {...childrenProps}/>);
  }
}

export default OrdersRowContainer;
