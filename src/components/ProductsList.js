import React, { Component } from 'react';
import { connect }  from 'react-redux';

import Product from './Product';
import MdSearch from 'react-icons/lib/md/search';

class ProductsList extends Component {
  constructor(){
    super();
    this.state = {
      search : ''
    }
  }
  updateSearch(event){
    this.setState({search: event.target.value})
  }
  render() {
    let filtered = this.props.ProductsArr.filter((product) => {
      return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <div className="products">
        <div className="search-input-div">
          <MdSearch className="search-icon" />
          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} autoFocus placeholder="Search..."/>
        </div>
        {filtered.length > 0 ? (
          <div className="ProductsList">
          {filtered.map((product, index) => {
            return <Product product={product} key={index}/>
          })}
          </div>
        ) : (
          <p className="not-found">No products found! </p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ProductsArr: state.products
  }
}


export default connect(mapStateToProps)(ProductsList);
