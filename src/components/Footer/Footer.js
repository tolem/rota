import React from 'react';
import github from '../../images/Vector.svg';

const Footer = () => (
  <footer className="footer">
    <p className="footer__title"> Powered by News API</p>
    <div className="footer__container">
      <ul className="footer__container-content footer__container-links">
        <li className="footer__container-item"><a className="footer__container-link" href="/">Home</a></li>
        <li className="footer__container-item"><a className="footer__container-link" href="https://practicum.yandex.com/" target="_blank" rel="noreferrer"> &copy; 2022, Newsroom </a></li>
      </ul>
      <ul className="footer__container-content footer__container-icons">
        <li><a href="google.com" target="_blank" rel="noreferrer"><img src={github} alt="github" className=" footer__container-content_icon" /></a></li>

      </ul>
    </div>

  </footer>
);

export default Footer;
