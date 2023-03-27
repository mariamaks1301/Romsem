import React, { useContext, useState } from 'react';
import Logo from '../../assets/logo.png';
import {HiShoppingCart} from 'react-icons/hi';
import {BsSearch, BsClock} from 'react-icons/bs';
import {VscAccount} from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import BasketZero from '../../Components/BasketZero/BasketZero';
import { Popover } from '@mui/material';

const Header = () => {

    const navigate = useNavigate();
    const {user, setUser, basket, setBasket } = useContext(CustomContext);
    const [show, setShow] = useState(false);
  
    
    const [popover, setPopover] = useState(false);

    const logOutUser = ()=>{
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }


    return (
        <section className='header'>
            <div className="wrapper">
                <div className="header__row">
                    <div className='header__left'>
                        <div>
                            <h1 className='header__logo' onClick={()=> navigate('/')}>
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

                        <div className="header__search" onClick={()=> setPopover(!popover)}>
                            <span>
                                <BsSearch style={{fontSize: '20px'}}/>
                            </span>
                             {
                                popover && <Popover  style={{display: 'block'}}
                                                anchorOrigin={{
                                                    vertical: 'center',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'center',
                                                    horizontal: 'right',
                                                }}
                                                >
                                                The content of the Popover.
                                            </Popover>
                            } 
                            
                        </div>

                        

                       
                             
                        <div className='header__basket '>
                            <span className='header__basket-icon'>
                                        <HiShoppingCart style={{fontSize: '32px'}}/>
                                    </span> 
                        </div>

                        <div className='header__account'>
                            <span className='header__account-icon'>
                                <VscAccount/>
                            </span>
                            {
                                user.email.length ? <span className='header__account-text' onClick={logOutUser}>Выйти</span> 
                                :
                                <Link className='header__account-text' to='/register'>
                                    <span>Войти</span>
                                </Link>
                            }
                        </div>

                    </div>
                </div> 
            </div>  
            <BasketZero show={show} setShow={setShow}/>      
        </section>
    );
};

export default Header;