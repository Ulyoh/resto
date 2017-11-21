import React, { Component } from 'react';
import OrderRow from '../Presentationals/OrderRow';
import i18n from '../../data/i18n';

class OrdersRowContainer extends Component {
  constructor(props) {
    super(props);

    this.allPrepared = this.allPrepared.bind(this);
    this.onePrepared = this.onePrepared.bind(this);
    this.oneNotAlreadyPrepared = this.oneNotAlreadyPrepared.bind(this);

    this.state = {
      allPrepared: false,
      toDo: this.props.order.toDo,
      done: this.props.order.done,
    };
  }

  onePrepared() {
    const done = +this.state.done < +this.state.toDo ? +this.state.done + 1 : +this.state.toDo;
    const allPrepared = (done >= this.state.toDo);
    const newState = Object.assign(this.state, { allPrepared, done: `${done}` });

    this.setState(newState);
  }

  oneNotAlreadyPrepared() {
    const done = +this.state.done > 0 ? +this.state.done - 1 : 0;
    const allPrepared = false;
    const newState = Object.assign(this.state, { allPrepared, done: `${done}` });

    this.setState(newState);
  }

  allPrepared() {
    const newState = Object.assign(this.state, { allPrepared: true, done: `${this.state.toDo}` });

    this.setState(newState);
  }

  render() {
    const order = this.props.order;
    const disabledWhenAllPrepared = this.state.allPrepared ? 'disabled' : false;
    const TrClassName = `article ${this.state.allPrepared ? 'success' : ''}`;
    const disabledWhenNonePrepared = this.state.done <= 0 ? 'disabled' : false;

    const buttonsProps = {
      allPrepared: this.allPrepared,
      onePrepared: this.onePrepared,
      oneNotAlreadyPrepared: this.oneNotAlreadyPrepared,
      disabledWhenAllPrepared,
      disabledWhenNonePrepared,
    };

    const childrenProps = {
      id: `${this.props.tableNbr}${order.article_nbr}`,
      className: TrClassName,
      done: this.state.done,
      toDo: order.toDo,
      groupTitle: i18n.groups[order.groupNbr].title,
      articleTitle: i18n.articles[order.article_nbr].title,
      buttonsProps,
    };

    return (<OrderRow {...childrenProps} />);
  }
}

export default OrdersRowContainer;
