import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {BsCreditCard2Back, BsWallet2} from 'react-icons/bs';


const Delivery = () => {
    const nagigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur"
      });


    return (
        <div className='delivery'>
            <div className="container">
                <div className="delivery__path">
                    <button className='delivery__path-btn'>Продолжить выбор</button>
                    <button className='delivery__path-btn'>Вернуться на главную страницу</button>
                </div>
            </div>
            <div className="delivery__content">
                <form className='delivery__form' action="">
                    <h2 className="delivery__title">Ваши данные</h2>
                    <div className='delivery__row'>
                        <div className='delivery__left'>
                            <div className="delivery__left-row">
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field' type="text" placeholder='Телефон' />
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field' type="text" placeholder='Имя' />
                                </label>
                            </div>
                        
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <button className='delivery__form-btn delivery__form-btn-left'>
                                    <span>
                                        <BsWallet2/>
                                    </span>
                                    Наличными
                                </button>
                                <button className='delivery__form-btn delivery__form-btn-right'>
                                    <span>
                                        <BsCreditCard2Back/>
                                    </span>
                                    Картой
                                </button>
                            </label>
                     
                            <div className="delivery__left-row">
                                <div className='delivery__left-cash'>
                                    <input className='delivery__field-cash' type="radio" />
                                    <p className='delivery__left-cash-text'>Подготовить сдачу с</p>
                                </div>
                                <label className='delivery__form-label delivery__form-label-cash' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-cash' type="number" placeholder='Сумма' />
                                </label>
                            </div>
                            <label className='delivery__form-label' htmlFor="">
                                <input className='delivery__form-field delivery__form-field-long' type="text" placeholder='Комменатрий к заказу' />
                            </label>
                            
                            <div className='delivery__form-cutlery'>
                                <p className='delivery__form-cutlery-text'>Палочки + соусник обычные</p>
                                <div className='delivery__form-cutlery-row'>
                                    <span>+</span>
                                    <span>2</span>
                                    <span>-</span>
                                </div>
                            </div>
                        </div>
                        <div className='delivery__right'>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <button className='delivery__form-btn delivery__form-btn-left'>
                                    Курьером
                                </button>
                                <button className='delivery__form-btn delivery__form-btn-right'>
                                    Самовывоз
                                </button>
                            </label>
                            <div className="delivery__right-row">
                                <label className='delivery__form-label delivery__form-label-street' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-street' type="text"  placeholder='Улица'/>  
                                </label>
                                <label className='delivery__form-label delivery__form-label-short' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="text"  placeholder='Дом'/> 

                                </label>
                        
                            </div>
                            <div className="delivery__right-row delivery__right-row-short">
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Кв'/>  
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Подъе'/> 
                                     
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Этаж'/> 
                                    
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Код'/>   
                                </label>
                        
                            </div>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <button className='delivery__form-btn delivery__form-btn-left'>
                                    На сейчас
                                </button>
                                <button className='delivery__form-btn delivery__form-btn-right'>
                                    На время
                                </button>
                            </label>
                            
                            <label className='delivery__form-label' htmlFor="">
                                <input className='delivery__form-field delivery__form-field-long' type="email" placeholder='Emai (необязательно)' />
                            </label>
                        </div>
                    </div>
                    <button className='delivery__form-btn-submit' type='submit'>Оформить заказ</button>
                </form> 
            </div>
        </div>
    );
};

export default Delivery;