 import React, { useContext, useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import BasketZero from '../../Components/BasketZero/BasketZero';
 import { CustomContext } from '../../utils/Context';
 import {TiPlus, TiMinus} from 'react-icons/ti';




 const Basket = () => {
    const {basket, plusOneBasket, minusOneBasket, delBasket} = useContext(CustomContext);
    console.log(basket.length);



     return (
         <div className='basket'>
             <div className="container">
                 <div className="basket__content">
                     <h2 className='basket__title'>Корзина</h2>

                    <div className="basket__list">

                    {
                        basket.map((item) => (
                        
                        <li key={item.id} className="basket__item">
                            <div className='basket__item-left'>
                                <img className='basket__item-img' src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt={item.title} />
                                <div className='basket__item-text'>
                                    <h2 className='basket__item-title'>{item.title}</h2>
                                    <p className='basket__item-desc'>{item.description}</p>
                                </div>
                            </div>
                            <div className="basket__item-right">
                                <div className='basket__item-count'>
                                    <button className='basket__item-btn' type='button' onClick={()=>minusOneBasket(item.id)}>
                                        <TiMinus fill='white' fontSize={'20px'}/>
                                    </button>
                                    <p className='basket__item-num'>{item.count}</p>
                                    <button className='basket__item-btn' type='button' onClick={()=> plusOneBasket(item.id)}>
                                        <TiPlus fill='white' fontSize={'20px'}/>
                                    </button>
                                </div>
                                <p className='basket__item-price'>{item.price * item.count} ₽</p>
                                <button className='basket__item-btn' type='button' onClick={()=>delBasket(item.id)}>
                                    <span className='basket__item-btn basket__item-btn-delete '>
                                        <span style={{transform: 'rotate(45deg)', marginTop: '3px 3px 0 0 '}}>
                                            <TiPlus fill='white' fontSize={'20px'} />
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </li>
                            ))
                    }  
                           
                        
                            
                                             
                    </div>


                    <div className='basket__total'>
                        <div className='basket__total-info'>
                            <p className='basket__total-price'>Итого:<span> {1000} ₽ </span></p>
                            <p className='basket__total-delivery'>До бесплатной доставки не хватет: <span>{100} ₽</span></p>
                            <p className='basket__total-delivery'>Минимальная сума заказа 1500 ₽</p>
                        </div>
                        <button type='button' className='basket__total-btn'>Оформить заказ</button>
                    </div>
                 </div> 
             </div>
            
         </div>
     );
 };

 export default Basket;