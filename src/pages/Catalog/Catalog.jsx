import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';


const Catalog = () => {
    const [products,  setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios('/products')
        .then(({data})=> setProducts(data))
        .catch((err)=> console.log(err.message))
    }, [])
    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__aside"></div>

                    <div className="catalog__row">
                        <h2 className='catalog__title'>Catalog Title</h2>
                        {
                            products.map(item => (
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
                            ))
                        }

                    </div>

                </div>
                
              

                
            </div>
        </section>
    );
};

export default Catalog;