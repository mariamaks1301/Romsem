import React from 'react';
import MenuList from '../../Components/MenuList/MenuList';
import Recommend from '../../Components/Recommend/Recommend';
import Info from './Info/Info';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import AboutMenu from './AboutMenu/AboutMenu';





const Home = () => {
    return (
        <section className='home'>
            
            <MenuList/>


                <div className="home__content">
                <div className="container">
                    <div className="home__swiper">
                        
                        <>
                            <Swiper
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 3000
                                }}
                                speed={1000}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="slider__card">
                                        
                                        <img className='slider__card-img slider__card-img-half' src="https://wasabi.kg/wp-content/uploads/2021/09/title-page-e1632388803700.png" alt="" />
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


                   
                        <AboutMenu/>
                    </div>

                    <Recommend/>

                    <div className="container">
                        <Info/>
                    </div>

                </div>
                
  

            
        </section>
    );
};

export default Home;