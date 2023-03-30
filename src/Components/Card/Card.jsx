import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import {TiPlus, TiMinus} from 'react-icons/ti';


const Card = ({item}) => {
    const {addBasket, basket, plusOneBasket, minusOneBasket} = useContext(CustomContext);
    const navigate = useNavigate();
 

    return (
        <div key={item.id} className="card">
            <div className='card__block-img' onClick={()=> navigate(`/product/${item.id}`)}>
                <img className='card__img' src={item.image} alt={item.title} />
            </div>
            <div className='card__block-info'>
                <h3 className='card__title'>{item.title}</h3>
                <div className='card__desc'>
                    <p className='card__weight'>Вес: {item.weight}гр</p>
                    <p className='card__quantity'>Кол кусочков: {item.quantity}</p>
                </div>        
            </div>  
            
            {
                basket.findIndex(product => product.id === item.id) > -1 
                ? <div className='card__row'>
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

                <div className='card__count'>{
                    basket.find((product)=>product.id === item.id).count
                }</div>

            </div>
                : <div className="card__row">
                <h3 className="card__price">{item.price} Сом</h3>
                <button onClick={()=>addBasket(item)} className="card__btn" type="button">
                    <span>Хочу</span>  
                </button>
            </div>

            } 
        </div>
    );
};

export default Card;