import React from 'react';
import MenuList from '../../Components/MenuList/MenuList';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";


const Home = () => {
    return (
        <section className='home'>
            
                <MenuList/>
          
            
            <div className="container">
                <div className="home__content">
                    <div className="home__swiper">
                        
                        <>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="slider__card slider__card-row">
                                        <h2>Новое меню</h2>
                                        <h3>+ бесплатная доставка</h3>
                                        <img className='slider__card-img' src="https://wasabi.kg/wp-content/uploads/2021/07/rukkola-s-krevetkami.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__card">
                                        <img className='slider__card-img' src="https://wasabi.kg/wp-content/uploads/2021/09/title-page-copy-e1632388697764.png" alt="" />
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Home;