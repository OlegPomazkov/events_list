function errorReducer(state = {}, action) {
  switch (action.type) {
    case 'EVENTS_GET_ERROR':
      console.log('From ERROR_REDUCER ----> ', action.payload);

      return Object.assign({}, state);
      
    default:
      return state;
  }
}

module.exports = errorReducer;
