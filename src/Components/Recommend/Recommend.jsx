import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import axios from '../../utils/axios';



const Recommend = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('/products')
        .then(({data}) => setProducts(data))
        .catch((err)=> console.log(err.message))
    }, [])

    return (
        <div className='recommend'>
            <div className="recommend-sliders">
                <Swiper
                   
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    
                        {
                            products.map((item)=>(
                                <SwiperSlide key={item.id} >
                                    <div  className="recommend__card" onClick={()=> navigate(`/product/${item.id}`)}>
                                        <div className='recommend__card-block-img'>
                                            <img src={item.image} alt={item.title}  className="recommend__card-img"/>
                                        </div>
                                        <div className="recommend__card-info">
                                                <h3 className="recommend__card-title">{item.title}</h3>
                                            <div className="recommend__card-row">
                                                <p className="recommend__card-weight">Вес: {item.weight} г</p>
                                                <p className="recommend__card-weight">Цена: {item.price} Сом</p>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }  
                        
                </Swiper>
            </div>
            
        </div>
    );
};

export default Recommend;