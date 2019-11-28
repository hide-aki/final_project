import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProduct } from '../../actions/product';

import './ProductPage.scss';

// const ProductPageF = ({getCurrentProduct, profile: { enabled } ,match}) => {
// useEffect(() => {
//   getCurrentProduct(match.params.id);
// }, [getCurrentProduct]);

const ProductPageF = (props, match) => {
  console.log(props);

  return (
    <div className="product">
      <div className="product-header">
        <div className="header-info">
          {/* <h3>{enabled}</h3> */}
          {/* <h2>{name}</h2> */}
        </div>
        {/* <p className="item-price">£{price.toFixed(2)}</p> */}
      </div>
      <div className="product-photo">
        <img src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/jasoksaru5oyf7g4nszw/shox-r4-older-shoe-0zblqw.jpg"></img>
      </div>
      <div className="product-select">
        <div className="sizes-info">
          <p>Select Size</p>
          <a href="/" className="size-guide">
            Size Guide
          </a>
        </div>
      </div>
      {/* need to iterate */}
      <div className="product-sizes container">
        <button className="light-btn">US 40</button>
        <button className="light-btn">US 40.5</button>
        <button className="light-btn">US 41</button>
        <button className="light-btn">US 41.5</button>
        <button className="light-btn">US 42</button>
        <button className="light-btn">US 42.5</button>
      </div>
      <div className="product-buttons container">
        <button className="add-to-bag-btn">Add to bag</button>
        <button className="favorite-btn">Favourite</button>
      </div>
      {/* <div className="product-photos">
          <img></img>
        </div> */}
      <div className="product-discription container">
        {/* <p className="short-discription">{description}</p> */}
        <ul className="property">
          {/* {property.map(v => (
            <li>{v}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getCurrentProduct })(ProductPageF);
