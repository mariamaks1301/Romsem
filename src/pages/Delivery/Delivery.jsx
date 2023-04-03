import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import TogleBtnCash from './TogleBtnCash';
import TogleBtnCourier from './TogleBtnCourier';
import TogleBtnNow from './TogleBtnNow';
import { useNavigate } from 'react-router';
import DeliveryDone from '../DeliveryDone/DeliveryDone';
import sendEmail from '../../utils/sendEmail';








const Delivery = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(2);

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur"
      });

        const handleSubmitToEmail = () => {
          const subject = `New Order from ${getValues('name'), getValues('phone')}`;
          const text = `Email: ${getValues('email')}
          \nAddress: ${getValues('street'), getValues('house'), getValues('apartment') }
          \nEntrance: ${getValues('entrance')}
          \nFloor: ${getValues('floor')}
          \Code: ${getValues('code')}
          \nAddress: ${getValues('address')}
          \nChange: ${getValues('change')}
          \nMessage: ${getValues('coment')}`;
          sendEmail('mariamaks1301@gmail.com', subject, text);
          console.log(subject);
          console.log(text);

          navigate('/delivery/done');
        };




    return (
        <div className='delivery'>
            <div className="container">
                <div className="delivery__path">
                    <button onClick={()=> navigate('/catalog/category/all')} className='delivery__path-btn'>Продолжить выбор</button>
                    <button onClick={()=> navigate('/')} className='delivery__path-btn'>Вернуться на главную страницу</button>
                </div>
            </div>
            <div className="delivery__content">
                <form className='delivery__form' onSubmit={handleSubmit(handleSubmitToEmail)}>
                    <h2 className="delivery__title">Ваши данные</h2>
                    <div className='delivery__row'>
                        <div className='delivery__left'>
                            <div className="delivery__left-row">
                                <label className='delivery__form-label' htmlFor="">
                                    <InputMask 
                                        mask={`+\\9\\96(999)99-99-99`}
                                        type='tel'
                                        {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Это поле обязательное',
                                            },
                                            pattern: {
                                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                                message: 'Заполните номер телефона',
                                            },
                                        })}
                                        className='delivery__form-field'
                                        placeholder={'+996 (555) 55-55-55'}
                                    />
                                    <p className='form__error'>{errors.phone && errors.phone.message}</p>
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input {...register('name', {
                                         required: {
                                             value: true,
                                             message: 'Это поле обязательное',
                                         },
                                        maxLength: {
                                            message: 'Максимальная длина 15 символов',
                                            value: 15,
                                        },
                                        minLength: {
                                            message: 'Минимальная длина 3 символа',
                                            value: 3,
                                        },

                                    })} className='delivery__form-field' type="text" placeholder='Имя' />
                                </label>
                            </div>
                        
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                
                                <TogleBtnCash/>
                                
                            </label>
                     
                            <div className="delivery__left-row">
                                <div className='delivery__left-cash'>
                                    <input className='delivery__field-cash' type="radio" />
                                    <p className='delivery__left-cash-text'>Подготовить сдачу с</p>
                                </div>
                                <label className='delivery__form-label delivery__form-label-cash' htmlFor="">
                                    <input {...register('change')} className='delivery__form-field delivery__form-field-cash' type="number" placeholder='Сумма' />
                                </label>
                            </div>
                            <label className='delivery__form-label' htmlFor="">
                                <input {...register('coment')} className='delivery__form-field delivery__form-field-long' type="text" placeholder='Комменатрий к заказу' />
                            </label>
                            
                            <div className='delivery__form-cutlery'>
                                <p className='delivery__form-cutlery-text'>Палочки + соусник обычные</p>
                                <div className='delivery__form-cutlery-row'>
                                    <span className='delivery__form-cutlery-plus' onClick={()=> setCount(prev =>  prev + 1)}>+</span>
                                    <span className='delivery__form-cutlery-count'>{count}</span>
                                    <span className='delivery__form-cutlery-minus' onClick={()=> setCount(
                                        prev => prev > 1 ? prev - 1 : prev)
                                        }>-</span>
                                </div>
                            </div>
                        </div>
                        <div className='delivery__right'>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <TogleBtnCourier/>
                                
                            </label>
                            <div className="delivery__right-row">
                                <label className='delivery__form-label delivery__form-label-street' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-street' type="text"  placeholder='Улица'/>  
                                </label>
                                <label className='delivery__form-label delivery__form-label-short' htmlFor="">
                                    <input {...register('house', {
                                         required: {
                                            value: true,
                                            message: 'Это поле обязательное',
                                        },
                                    })} className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Дом'/> 

                                </label>
                        
                            </div>
                            <div className="delivery__right-row delivery__right-row-short">
                                <label className='delivery__form-label' htmlFor="">
                                    <input {...register('apartment')} className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Кв'/>  
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input {...register('entrance')} className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Подъе'/> 
                                     
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input {...register('floor')} className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Этаж'/> 
                                    
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input {...register('code')} className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Код'/>   
                                </label>
                        
                            </div>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <TogleBtnNow/>
                            </label>
                            
                            <label className='delivery__form-label' htmlFor="">
                                <input  {...register( 'email', {
                      
                                    pattern: {
                                        message: 'Введите email верно',
                                        value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                    },

                                })} className='delivery__form-field delivery__form-field-long' type="email" placeholder='Emai (необязательно)'/>
                                <p className='form__error'>{errors.email && errors.email.message}</p>
                            </label>
                        </div>
                    </div>
                    <div className="delivery__form-btn-center">
                        <button className='delivery__form-btn-submit' type='submit'>Оформить заказ</button>
    
                    </div>
                </form> 
            </div>
            
            
             
            
            
        </div>
    );
};

export default Delivery;