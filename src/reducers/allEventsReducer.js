const initialState = {
  allEvents: null
}; 

function allEventsReducer(state = initialState, action) {
  switch (action.type) {

    case 'EVENTS_GET_SUCCESS':

      return Object.assign({}, state, {allEvents: action.payload});

    default:
      return state;
  }
}

module.exports = allEventsReducer;
