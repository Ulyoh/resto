import React, { Component } from 'react';
import i18n from './data/i18n.js';

class OrdersArticle extends Component {
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

    return(
      <tr id={'' + this.props.table_nbr + order.article_nbr} className={ TrClassName }>
          <td>
            <span className="toBePrepared"> {this.state.prepared + '/' + order.toBePrepared} </span>
            <span className="money"> </span>
            <span style={{margin: '7px'}} > {order.group} </span>
            <span style={{margin: '7px'}} > {order.article_title} </span>

            <button onClick={this.allPrepared} className="btn btn-default btn_less btn_change_toBePrepared" type="button" disabled={disabledWhenAllPrepared} > {i18n.txt.prepared} </button>

            <button onClick={this.onePrepared} className="btn btn-default btn_less btn_change_toBePrepared" type="button" disabled={disabledWhenAllPrepared}> + </button>

            <button onClick={this.oneNotAlreadyPrepared} className="btn btn-default btn_less btn_change_toBePrepared" type="button" disabled={disabledWhenNonePrepared}> - </button>
          </td>
        </tr>
    );
  }
}

export default OrdersArticle;
