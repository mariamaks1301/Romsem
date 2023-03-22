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
                    slidesPerView={4.5}
                    spaceBetween={20}
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
                                    <div  className="recommend__card">
                                        <div className='recommend__card-block-img'>
                                            <img src={item.image} alt={item.title}  className="recommend__card-img"/>
                                        </div>
                                        <div className="recommend__card-info">
                                            <div className="recommend__card-row">
                                                <h3 className="recommend__card-title">{item.title}</h3>
                                                <p className="recommend__card-weight">Вес: {item.weight} г</p>
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