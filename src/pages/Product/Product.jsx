import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {HiOutlineChevronLeft} from 'react-icons/hi';
import Recommend from '../../Components/Recommend/Recommend';
import {HiShoppingCart} from 'react-icons/hi';
import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import {TiPlus, TiMinus} from 'react-icons/ti';
import { display, style } from '@mui/system';




const Product = () => {

    const { basket, addBasket, plusOneBasket, minusOneBasket, setBasket } = useContext(CustomContext);
    console.log(basket)


    const [item, setItem] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    


     useEffect(()=>{
         axios(`/products/${id}`)
         .then(({data})=> setItem(data))
         .catch((err)=> console.log(err))
     }, [id])

     if(JSON.stringify(item) === '{}'){
         return (
             <div className="container">
                 <div onClick={()=> navigate(-1)} className="product__back" >
                     <span className='product__back-icon'>
                         <HiOutlineChevronLeft style={{color: '#fff'}}/>
                     </span>
                     <span className='product__back-text'>Вернуться назад</span>
                 </div>
                 <h2 className='product__title'>Продукт не найден!</h2>
             </div>
         )
     }



    return (
        <div className='product'>
            <div className="container">
                <div className="product__row">
                        <div className="product__block-img">
                            <img className='product__img' src={item.image} alt={item.title} />
                        </div>
                        <div className='product__info'>
                            <h2 className='product__title'>{item.title}</h2>
                            <p className="product__weight">
                                <span>Вес: </span>
                                <span>{item.weight} грамм</span>
                            </p>
                            <div className="product__row product__row-basket">
                                <p className="product__price">{item.price} Сом</p>
                            </div>
                            <p className="product__description">
                                <span>Состав: </span>
                                {item.ingridients}
                            </p>


{
                basket.findIndex(product => product.id === item.id) > -1 
                ? <div className='card__row product__row'>
                <button className="basket__item-btn" type="button" onClick={()=>minusOneBasket(item.id)}>
                    <span>
                        <TiMinus fill='white' fontSize={'20px'}/>
                    </span>
                </button>
                <h3 className="card__price">{item.price} Сом</h3>
                <button className="basket__item-btn" type="button" onClick={()=>plusOneBasket(item.id)}>
                    <span>
                        <TiPlus fill='white'  fontSize={'20px'}/>

                    </span>
                </button>

                <div className='product__count '>{
                    basket.find((product)=>product.id === item.id).count
                }</div>

            </div>
                : <div className="card__row product__row">
                <h3 className="card__price">{item.price} Сом</h3>
                <button onClick={()=>addBasket(item)} className="card__btn" type="button">
                    <span>Хочу</span>  
                </button>
            </div>

            } 

                        </div>
                    </div>

            </div>

            <Recommend/>
            
        </div>
    );
};

export default Product;