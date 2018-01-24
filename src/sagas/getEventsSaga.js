const call = require('redux-saga/effects').call;
const put = require('redux-saga/effects').put;
const takeEvery = require('redux-saga/effects').takeEvery;

const Api = require('../api/api.js');

const api = new Api();

function* onGetEvents(action) {
  try {
    const eventsList = yield call(api.getEvents, action.payload);
    let cleanedEventsList = [];

    for (let i = 0; i < eventsList.message.length; i++) {
      eventsList.message[i].subevents.forEach( 
      	item => {	
          cleanedEventsList.push({
          	name: eventsList.message[i].title,
          	imageSrc: '//media.cultserv.ru/i/202x150/' + item.image, 
          	date: item.date,
          	place: item.venue.title,
          	price: item.min_price 
          })
      }); 
    }
    yield put({type: "EVENTS_GET_SUCCESS", payload: cleanedEventsList});
  } catch (e) {
    yield put({type: "EVENTS_GET_ERROR", payload: e.message});
  }
}

export default function* getEventsSaga() {
  yield takeEvery('GET_EVENTS', onGetEvents);
};
