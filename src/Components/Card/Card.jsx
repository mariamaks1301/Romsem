import React from 'react';
import { useNavigate } from 'react-router-dom';


const Card = ({item}) => {
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
                <div className='card__row'>
                    <p className='card__price'>{item.price} Сом</p>
                    <button className='card__btn' type='button'>Хочу</button>
                </div>
                
            </div>   
        </div>
    );
};

export default Card;