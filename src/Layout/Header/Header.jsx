import React from 'react';
import Logo from '../../assets/logo.png';
import {HiShoppingCart} from 'react-icons/hi';
import {BsSearch, BsClock} from 'react-icons/bs';
import {VscAccount} from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <section className='header'>
            <div className="wrapper">
                <div className="header__row">
                    <div className='header__left'>
                        <div>
                            <h1 className='header__logo'>
                                <span className='header__logo-name'>Romsem</span>
                                <img className='header__logo-img' src={Logo} alt="RomSem Logo" />
                            </h1>

                        </div>
                        
                        <div className="header__contacts">
                            <p className='header__contacts-text'>Наш телефон</p>
                            <a className='header__contacts-link' href="tel:+996 705 188 955">+996 705 188 955</a> <br />
                            <a className='header__contacts-link'  href="tel:+996 555 188 955">+996 555 188 955</a>
                            <div className='header__contacts-row'>
                                <span className='header__contacts-icon'>
                                    <BsClock fill='orange'/>
                                </span>
                                <span className='header__contacts-time'>работаем с 10:00 до 00:00</span>
                            </div>
                        </div>
                        <div className='header__location'>
                            <span className='header__location-text'>Город:</span>
                            <span className='header__location-city'>Бишкек</span>
                        </div>
                    </div>
                    <div className='header__right'>
                        <Link className='header__right-link-reviews' to={'/reviews'}>Отзывы</Link>
                        <Link className='header__right-link-delivery' to={'/delivery'}>Доставка и оплата</Link>

                        <div className="header__search">
                            <span>
                                <BsSearch style={{fontSize: '20px'}}/>
                            </span>
                        </div>
                        <div className='header__basket'>
                            <span className='header__basket-icon'>
                                <HiShoppingCart style={{fontSize: '32px'}}/>
                            </span>
                        </div>
                        <div className='header__account'>
                            <span className='header__account-icon'>
                                <VscAccount/>
                            </span>
                            <span className='header__account-text'>Войти</span>
                        </div>

                    </div>
                </div> 
            </div>        
        </section>
    );
};

export default Header;