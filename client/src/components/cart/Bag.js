import React, { Component, Fragment } from 'react';

import _ from 'lodash';
import { connect } from 'react-redux';

import './Cart.scss';

class Bag extends Component {
  render() {
    const {
      cart: { items }
    } = this.props.authorization;

    const bagPrice = () => {
      let price = 0;
      for (let i = 0; i < items.length; i++) {
        price += _.get(items[i], 'modelNo.currentPrice') * items[i].quantity;
      }
      return price;
    };

    return (
      <Fragment>
        <div className="bag">
          <h2>BAG</h2>
          <div className="about-item">
            {items.length} items
            <div className="stick" />
            <span className="price">${bagPrice()}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authorization: state.authorization
  };
}

export default connect(mapStateToProps)(Bag);
