import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div>
          <p className="price">${this.props.product.price}</p>
          <div className="img" style={{backgroundImage: `url(${this.props.product.picture})`}}></div>
          <p>{this.props.product.name}</p>
          <button className="buy-btn">+ Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
