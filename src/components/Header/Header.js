import React, { Component } from 'react';
import './Header.css';

import hamburger from './images/hamburger.png';
import logoPicture from './images/logoPicture.png';
import logoName from './images/logoName.png';
import userInfo from './images/userInfo.png';
import userProfile from './images/userProfile.png';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__menu'><img src={hamburger} alt=''/></div>
        <div className='header__logo__pic'><img src={logoPicture} alt=''/></div>
        <div className='header__logo__name'><img src={logoName}  alt='' className='header__logo__name'/></div>
        <div className='header__user'>
          <div className='header__user__info'><img src={userInfo} alt=''/></div>
          <div className='header__user__profile'><img src={userProfile} alt=''/></div>
        </div>
      </div>
    ); 
  }
}

export default Header;
