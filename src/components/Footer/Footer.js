import React, { Component } from 'react';
import './Footer.css';

import apple from './images/apple.png';
import google from './images/google.png';
import visa from './images/visa.png';
import mastercard from './images/mastercard.png';
import paypal from './images/paypal.png';
import sberbank from './images/sberbank.png';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__news'>
          <div className='footer__news__title'>НОВОСТИ НА СОВЕ</div>
          <div className='footer__news__content'>Блог Сова</div>
        </div>
        <div className='footer__mob'>
          <div className='footer__mob__title'>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</div>
          <div className='footer__mob__content'>
            <div className='footer__mob__content__apple'>
              <img src={apple} alt='apple' className='footer__mob__content__pic'/> App Store
            </div>
            <div className='footer__mob__content__google'>
              <img src={google} alt='google' className='footer__mob__content__pic'/> Google Play
            </div>
          </div>
        </div>
        <div className='footer__pay'>
          <div className='footer__pay__title'>МЫ ПРИНИМАЕМ</div>
          <div className='footer__pay__content'>
            <img src={visa} alt='visa' className='footer__pay__content__pic'/>
            <img src={mastercard} alt='mastercard' className='footer__pay__content__pic'/>
            <img src={paypal} alt='paypal' className='footer__pay__content__pic'/>
            <img src={sberbank} alt='sberbank' className='footer__pay__content__pic'/>
          </div>
        </div>
        <div className='footer__common'>
          <div className='footer__common__content'>
            <p>&#169; 2017 ООО «КС». Все права защищены. Использование этого сайта означает принятие  <span className='link'>Пользовательского соглашения</span> и <span className='link'>Политики конфиденциальности</span> онлайн сервиса Ponominalu.ru</p>
            <p>Адрес: Москва, Таганская 26 стр.1, 109147</p>
            <p>Телефон в Москве: 8 (495) 228-20-80</p>
            <p>E-mail: contact@ponominalu.ru</p>
          </div>
        </div> 
        <div className='clearfix'></div>
      </div>
    ); 
  }
}

export default Footer;
