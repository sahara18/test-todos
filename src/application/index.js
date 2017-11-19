import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './style.css';

import App from 'components/app';
import registerServiceWorker from 'utils/registerServiceWorker';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  combineReducers(reducers),
  enhancers
);

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
