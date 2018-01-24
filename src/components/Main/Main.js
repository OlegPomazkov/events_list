import React from 'react';
import './Main.css';

import Event from '../../components/Event/Event.js';

class Main extends React.Component {

  render() {
  	let template = this.props.eventsList ? 
  	  this.props.eventsList.map( (item, ind) => <Event key={'event_' + ind} event={item}/>) : null;

    return (
      <div className='list'>
        <div className='list__title'>Мероприятия</div>
        <div className='list__itself'>
          {template ? template : 'Нет событий!'}
        </div>
      </div>
    ); 
  }
}

export default Main;
