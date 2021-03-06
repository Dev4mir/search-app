import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import AllReducers from './reducers';

const store = createStore(AllReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
