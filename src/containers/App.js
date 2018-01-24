import React from 'react';
import  {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';

import getEvents from '../actions/getEvents.js';

import Header from '../components/Header/Header.js';
import Main from '../components/Main/Main.js';
import Footer from '../components/Footer/Footer.js';

class App extends React.Component {
  getEvents() {
    this.props.getEvents(); 
  }

  render() {
    if (!this.props.allEvents) this.getEvents();

    return (
      <div>
        <Header/>
        <Main eventsList={this.props.allEvents}/>
        <Footer/>
      </div>
    ); 
  }
}

function mapStateToProps (state) {
  return {
    allEvents: state.allEventsReducer.allEvents
  };
} 

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getEvents
  }, dispatch);
}

var AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
