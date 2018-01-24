import './css/index.css';
import getEventsSaga from './sagas/getEventsSaga';
import AppConnected from './containers/App.js';

import registerServiceWorker from './registerServiceWorker';

const ReactDOM = require('react-dom');
const React = require('react');
const Provider = require('react-redux').Provider;
const sagaMiddleware = require('./store/configureStore').sagaMiddleware;
const configureStore = require('./store/configureStore').store;

const store = configureStore();

sagaMiddleware.run(getEventsSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppConnected/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();