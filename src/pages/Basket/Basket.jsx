// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BasketZero from '../../Components/BasketZero/BasketZero';
// import { useGetBasketProductsQuery, useDeleteBasketProductMutation } from '../../redux';



// const Basket = () => {
//     const navigate = useNavigate();
//     const {data=[]} = useGetBasketProductsQuery();
//     const [deleteProductInBasket] = useDeleteBasketProductMutation();
//     const [count, setCount] = useState(0);

//     const deleteBasketProduct =  async (id) => {
//         await deleteProductInBasket(id).unwrap();

//     }


//     {
//         if(data.length === 0){
//             return <BasketZero/>
//         }else{
//             navigate('/basket')
//         }
//     }


//     return (
//         <div className='basket'>
//             <div className="container">
//                 <div className="basket__content">
//                     <h2 className='basket__title'>Корзина</h2>

//                     <div className="basket__list">

//                         {
//                             data.map(item => (
//                                 <div key={item.id} className="basket__item">
//                                     <div className='basket__block-img'>
//                                         <img className='basket__item-img' src={item.image} alt={item.title}/>
//                                     </div>
//                                     <div className='basket__item-info'>
//                                         <h3 className='basket__item-title'>{item.title}</h3>
//                                         <p className="basket__item-price"> Цена за блюдо: {item.price} Сом</p>
//                                     </div>
//                                     <div className='basket__item-btns'>
//                                         <div className="basket__item-block">
//                                             <button className='basket__item-btn basket__item-btn-decrease btn'>
//                                                 <span style={{marginBottom:"8px"}}>
//                                                     <svg paddingBottom="10" width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M0 1.89993C0 1.07151 0.671573 0.399933 1.5 0.399933H10.5C11.3284 0.399933 12 1.07151 12 1.89993C12 2.72836 11.3284 3.39993 10.5 3.39993H1.5C0.671573 3.39993 0 2.72836 0 1.89993Z" fill="white"/>
//                                                     </svg>
//                                                 </span>
//                                             </button>
//                                             <p className="basket__item-price">{count}</p>
//                                             <button className='basket__item-btn basket__item-btn-icrease btn'>
//                                                 <span>
//                                                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <g clipPath="url(#clip0_69_487)">
//                                                         <path d="M10.2771 4.69675H7.34632V1.766C7.34632 1.04596 6.74157 0.456581 6.02127 0.456581C5.30097 0.456581 4.69622 1.04596 4.69622 1.766V4.69675H1.76547C1.04544 4.69675 0.456055 5.3015 0.456055 6.0218C0.456055 6.7421 1.04544 7.34685 1.76547 7.34685H4.69622V10.2776C4.69622 10.9976 5.30097 11.587 6.02127 11.587C6.74157 11.587 7.34632 10.9976 7.34632 10.2776V7.34685H10.2771C10.9971 7.34685 11.5865 6.7421 11.5865 6.0218C11.5865 5.3015 10.9971 4.69675 10.2771 4.69675Z" fill="white"/>
//                                                         </g>
//                                                         <defs>
//                                                         <clipPath id="clip0_69_487">
//                                                         <rect width="11.1304" height="11.1304" fill="white" transform="translate(0.456055 0.456581)"/>
//                                                         </clipPath>
//                                                         </defs>
//                                                     </svg>
//                                                 </span>
//                                             </button>
//                                             <p className="basket__item-price">{item.price} Сом</p>
//                                         </div>
//                                         <div className='basket__item-block'>
//                                             <button className='basket__item-btn basket__item-delete btn' onClick={()=> deleteBasketProduct(item.id)}>
//                                             <span style={{marginBottom:"3px"}}>
//                                                 <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path d="M8.60349 7.14369L6.53113 5.07133L8.60349 2.99898C9.11263 2.48984 9.10176 1.64546 8.59243 1.13613C8.0831 0.626803 7.23872 0.615935 6.72958 1.12508L4.65723 3.19743L2.58487 1.12508C2.07573 0.615935 1.23135 0.626803 0.722023 1.13613C0.212695 1.64546 0.201827 2.48984 0.710967 2.99898L2.78332 5.07133L0.710968 7.14369C0.201827 7.65283 0.212695 8.49721 0.722023 9.00654C1.23135 9.51587 2.07573 9.52673 2.58487 9.01759L4.65723 6.94524L6.72958 9.01759C7.23872 9.52673 8.0831 9.51587 8.59243 9.00654C9.10176 8.49721 9.11263 7.65283 8.60349 7.14369Z" fill="white"/>
//                                                 </svg>
//                                             </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
                        
//                     </div>


//                     <div className='basket__total'>
//                         <div className='basket__total-info'>
//                             <p className='basket__total-price'>Итого:<span> {1000} ₽ </span></p>
//                             <p className='basket__total-delivery'>До бесплатной доставки не хватет: <span>{100} ₽</span></p>
//                             <p className='basket__total-delivery'>Минимальная сума заказа 1500 ₽</p>
//                         </div>
//                         <button type='button' className='basket__total-btn'>Оформить заказ</button>
//                     </div>

//                 </div> 
//             </div>
            
//         </div>
//     );
// };

// export default Basket;