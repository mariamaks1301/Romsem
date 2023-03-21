import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        axios(`/products/${id}`)
        .then(({data})=> setProduct(data))
        .catch((err)=> console.log(err))
    }, [])

    return (
        <div className='product'>
            <div className="container">
            <div className="product__row">
                    <img className='product__img' src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt={product.title} />
                    <div className='product__info'>
                        <h2 className='product__title'>{product.title}</h2>
                        <p className="product__description">{product.description}</p>
                        <p className="product__weight">
                            <span>Вес: </span>
                            <span>{product.weight}</span>
                        </p>
                        <p className="product__quantity">
                            <span>Кол кусочков: </span>
                            <span>{product.quantity}</span>
                        </p>
                        <div className="product__row product__row-basket">
                            <button className="product__btn">Корзина</button>
                            <p className="product__price">{product.price} ₽</p>
                        </div>
                       

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Product;