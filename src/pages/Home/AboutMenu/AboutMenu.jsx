import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../utils/axios';
import Pizza from '../../../assets/aboutMenu/pizza.png';
import Chicken from '../../../assets/aboutMenu/chicken.png';
import Ell from '../../../assets/aboutMenu/eel.png';
import Corndog from '../../../assets/aboutMenu/corndog.png';
import Sales from '../../../assets/aboutMenu/sales.png';
import Combo from '../../../assets/aboutMenu/combo.png';
import Wok from '../../../assets/aboutMenu/wok.png';
import Salads from '../../../assets/aboutMenu/salads.png';



const AboutMenu = () => {

    const [aboutMenu, setAboutMenu] = useState([]);

    useEffect(()=>{
        axios('/aboutmenu')
        .then(({data})=> {setAboutMenu(data)})
        .catch((err)=> console.log(err.message))
        
    }, [])
    
    return (
        <div className='aboutMenu'>
            {/* <div className="aboutMenu__row">
                {
                    aboutMenu.map((item)=>(
                        <div key={item.id} className='aboutMenu__card'>
                            <img className='aboutMenu__card-img' src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt="" />
                            <h2 className='aboutMenu__card-title'>{item.title}</h2>
                        </div>
                    ))
                }   
            </div> */}

            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link>
                        <img className='aboutMenu__card-img' src={Chicken} alt="" />
                        <h2 className='aboutMenu__card-title'>Чикен</h2>
                    </Link>
                </div>
                <div className='aboutMenu__block'>
                    <div className='aboutMenu__card'>
                        <Link>
                            <img className='aboutMenu__card-img' src={Ell} alt="" />
                            <h2 className='aboutMenu__card-title'>С угрем</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link>
                            <img className='aboutMenu__card-img' src={Corndog} alt="" />
                            <h2 className='aboutMenu__card-title'>Корн дог</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link>
                        <img className='aboutMenu__card-img' src={Pizza} alt="" />
                        <h2 className='aboutMenu__card-title'>Пицца</h2>
                    </Link>
                </div>
                <div className='aboutMenu__card'>
                    <Link>
                        <Link>
                            <img className='aboutMenu__card-img' src={Sales} alt="" />
                            <h2 className='aboutMenu__card-title'>Акции</h2>
                        </Link>
                    </Link>
                </div>  
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__block'>
                     <div className='aboutMenu__card'>
                        <Link>
                            <img className='aboutMenu__card-img' src={Wok} alt="" />
                            <h2 className='aboutMenu__card-title'>WOK</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link>
                            <img className='aboutMenu__card-img' src={Salads} alt="" />
                            <h2 className='aboutMenu__card-title'>Салаты</h2>
                        </Link>
                    </div>
                    
                </div>
                <div className='aboutMenu__card'>
                    <Link>
                        <img className='aboutMenu__card-img' src={Combo} alt="" />
                        <h2 className='aboutMenu__card-title'>Комбо</h2>
                    </Link>
                </div>
            </div>
            

        </div>
    );
};

export default AboutMenu;