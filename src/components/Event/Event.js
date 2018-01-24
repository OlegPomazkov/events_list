import React, { Component } from 'react';
import './Event.css';

import mark from './images/mark.png';

function formatDate( dateStr ) {
  let date = new Date(dateStr)
  let options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
 
  return date.toLocaleString("ru", options); 
}

class Event extends Component {

  render() {
    let dateFormatted = formatDate(this.props.event.date);

    return (
      <div className='event'>
        <div className='event__image'><img src={this.props.event.imageSrc} alt='' style={{width:'100%'}}/></div>
        <img className='event__image__mark'src={mark} alt=''/>
        <div className='event__name'>{this.props.event.name}</div>
        <div className='event__place-date'>
          <p className='event__place-date__up'>{dateFormatted}</p>
          <p className='event__place-date__down'>{this.props.event.place}</p>
        </div>
        <div className='event__price'>БИЛЕТЫ ОТ {this.props.event.price}&#8381;</div>
      </div>
    ); 
  }
}

export default Event;
