import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {HiOutlineChevronLeft} from 'react-icons/hi';
import Recommend from '../../Components/Recommend/Recommend';
import {HiShoppingCart} from 'react-icons/hi';


const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const [productCount, setProductCount] = useState(0);


    useEffect(()=>{
        axios(`/products/${id}`)
        .then(({data})=> setProduct(data))
        .catch((err)=> console.log(err))
    }, [id])

    if(JSON.stringify(product) === '{}'){
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
                            <img className='product__img' src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt={product.title} />
                        </div>
                        <div className='product__info'>
                            <h2 className='product__title'>{product.title}</h2>
                            <p className="product__weight">
                                <span>Вес: </span>
                                <span>{product.weight} грамм</span>
                            </p>
                            <div className="product__row product__row-basket">
                                <p className="product__price">{product.price} Сом</p>
                                <p className="product__btns-count">
                                    <button className='product__btn-count product__btn-count-decrease' type='button' onClick={()=> setProductCount((prev) => prev - 1)}>-</button>
                                    <span className='product__count'>{productCount}</span>
                                    <button className='product__btn-count product__btn-count-increase' type='button' onClick={()=> setProductCount((prev) => prev + 1)}> + </button>
                                </p>
                            </div>
                            <p className="product__description">
                                <span>Состав: </span>
                                {product.ingridients}
                            </p>

                            <button type='button' className='product__btn'>
                                <span>Хочу !</span>
                                <span>
                                    <HiShoppingCart fill='white' fontSize={'22px'}/>
                                </span>
                            </button>
                        
                        

                        </div>
                    </div>

            </div>

            <Recommend/>
            
        </div>
    );
};

export default Product;