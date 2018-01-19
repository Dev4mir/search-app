import {combineReducers}  from 'redux';
import ProductsReducer from './products-reducer';

const AllReducers = combineReducers({
  products: ProductsReducer
});

export default AllReducers;
