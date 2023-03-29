import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClock} from 'react-icons/bs';
import Map from '../../assets/map.png'

const BasketZero = ({show, setShow}) => {
    const navigate = useNavigate();

    const exitBasket = (e) => {
        if(e.target.classList.contains('basketZero')){
            setShow(false)
        }
    }
   

    return (
        <div style={{display: show ? 'flex' : 'none'}} className='basketZero' onClick={exitBasket}>
            <div className='basketZero__block'>
                <span className='basketZero__exit' onClick={()=> setShow(false)}>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_72_2828)">
                        <path d="M20.0111 16.8379L16.5016 13.3284L20.0111 9.81893C20.8733 8.95671 20.8549 7.52675 19.9923 6.66422C19.1298 5.80168 17.6999 5.78327 16.8376 6.64549L13.3281 10.155L9.81862 6.64549C8.9564 5.78327 7.52645 5.80168 6.66391 6.66422C5.80137 7.52675 5.78296 8.95671 6.64519 9.81893L10.1547 13.3284L6.64519 16.8379C5.78296 17.7002 5.80137 19.1301 6.66391 19.9926C7.52645 20.8552 8.9564 20.8736 9.81862 20.0114L13.3281 16.5019L16.8376 20.0114C17.6998 20.8736 19.1298 20.8552 19.9923 19.9926C20.8549 19.1301 20.8733 17.7002 20.0111 16.8379Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_72_2828">
                        <rect width="18.8492" height="18.8492" fill="white" transform="translate(13.3281) rotate(45)"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </span>
                <div className='basketZero__top'>
                    <h2 className='basketZero__top-title'>ВАША КОРЗИНА ПУСТА</h2>
                    <p className='basketZero__top-subtitle'>Добавьте же скорее что-нибудь!</p>
                    
                    <button className='btn basketZero__middle-btn' onClick={()=> navigate('/catalog')} type='button'>Посмотреть Меню</button>
                </div>
                <div className='basketZero__middle basketZero__top'>
                    <div className='basketZero__middle-block'>
                        <span className='basketZero__middle-block-icon'>
                            <BsClock fill='#F46D40' fontSize={'20px'}/>
                        </span>
                        <div className='basketZero__middle-block-info'>
                            <p>Доставим за 60 минут</p>
                            <p>Мин. заказ - 500 сом</p>
                        </div>
                    </div>
                    <div className='basketZero__top-btn'>Бесплатная доставка от 1000 СОМ</div>
                    
                </div>
                <div className='basketZero__bot'>
                
                    <img className='basketZero__bot-map' src={Map} alt="" />
              
                    <span className='basketZero__map-icon'>
                        <svg width="64" height="94" viewBox="0 0 64 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0C14.4094 0 0.0981445 14.311 0.0981445 31.9017C0.0981445 38.9705 4.25984 49.7209 13.1953 65.7334C19.2927 76.6593 25.362 85.8879 25.6181 86.2766L30.0049 92.9259C30.4471 93.5965 31.1965 94 32 94C32.8035 94 33.5529 93.5965 33.9952 92.9259L38.3818 86.277C38.6354 85.8927 44.6605 76.7438 50.8047 65.7334C59.7402 49.7216 63.9019 38.9713 63.9019 31.9017C63.9019 14.311 49.5907 0 32 0ZM46.6304 63.4038C40.5716 74.2602 34.6417 83.2655 34.3918 83.6439L32 87.2693L29.609 83.6449C29.3578 83.2634 23.3824 74.1774 17.3697 63.4038C9.08125 48.5506 4.87863 37.9517 4.87863 31.9017C4.87863 16.947 17.0452 4.78048 32 4.78048C46.9549 4.78048 59.1214 16.947 59.1214 31.9017C59.1214 37.9525 54.9188 48.551 46.6304 63.4038Z" fill="#F46D40"/>
                            <path d="M32 14.0146C22.2469 14.0146 14.3123 21.9495 14.3123 31.7024C14.3123 41.4554 22.2469 49.3902 32 49.3902C41.7532 49.3902 49.6878 41.4554 49.6878 31.7024C49.6878 21.9495 41.7532 14.0146 32 14.0146ZM32 44.6097C24.8829 44.6097 19.0927 38.8196 19.0927 31.7024C19.0927 24.5853 24.8829 18.7951 32 18.7951C39.1174 18.7951 44.9074 24.5853 44.9074 31.7024C44.9074 38.8196 39.1174 44.6097 32 44.6097Z" fill="#F46D40"/>
                        </svg>
                    </span>
                </div>
                
                
            </div>
            
            
        </div>
    );
};

export default BasketZero;