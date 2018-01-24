var combineReducers = require('redux').combineReducers;

var errorReducer = require('../reducers/errorReducer.js');
var allEventsReducer = require('../reducers/allEventsReducer.js');

const mainReducer = combineReducers({
  allEventsReducer,
  errorReducer
});

module.exports = mainReducer;
