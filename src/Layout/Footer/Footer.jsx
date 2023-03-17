import React from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__column">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link className="footer__link">О компании</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link">Доставка и оплата</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link">Лента материалов</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link">Политика возврата</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="footer__column footer__column-2">
                        <form className='footer__form' action="">
                            <h2 className='footer__form-title'>Введите номер</h2>
                            
                            <InputMask
                            placeholder='+996 (555) 55-55-55'
                            className='footer__form-field'
                            mask={`+\\9\\96(999)99-99-99`}
                            type='tel'
                            />
                            
                            <p className='footer__form-text'>
                                Выберите удобный <br /> 
                            мессенджер для общения
                            </p>
                            <div className="footer__social">
                                <ul className='footer__social-list'>
                                    <li className='footer__social-item'>
                                        <a className='footer__social-link' href="">
                                            <span className='footer__social-icon'></span>
                                        </a>
                                    </li>
                                    <li className='footer__social-item'>
                                        <a className='footer__social-link' href="">
                                            <span className='footer__social-icon'></span>
                                        </a>
                                    </li>
                                    <li className='footer__social-item'>
                                        <a className='footer__social-link' href="">
                                            <span className='footer__social-icon'></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </form>

                    </div>
                    <div className="footer__column footer__address">
                        <ul className='footer__list-address'>
                            <li className="footer__item-address">                               
                                <a href="tel:+996 705 188 955"  className="footer__link footer__link-tel">Тел: +996 705 188 955 </a>
                            </li>
                            <li className="footer__item">
                                <a href="tel:+996 555 188 955" className="footer__link footer__link-tel">Тел: +996 555 188 955 </a>
                            
                            </li>
                            <li className="footer__item">
                                <span className='footer__item-address-text'>Адрес:Бакаева 126</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;