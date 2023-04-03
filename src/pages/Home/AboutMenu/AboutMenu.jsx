import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import Pizza from '../../../assets/aboutMenu/pizza.png';
import Chicken from '../../../assets/aboutMenu/chicken.png';
import Ell from '../../../assets/aboutMenu/eel.png';
import Sales from '../../../assets/aboutMenu/sales.png';






const AboutMenu = () => {

    const navigate = useNavigate();

     const [menu, setMenu] = useState([]);
     useEffect(()=>{
         axios('/menu')
         .then(({data})=> {setMenu(data)})
         .catch((err)=> console.log(err.message))   
     }, [])
    
    return (
        <div className='aboutMenu'>
             <div className="aboutMenu__row aboutMenu__row-map">
                {
                    menu.map((item)=>(
                        <div key={item.id} onClick={()=> navigate(`/catalog/${item.category}/${item.ingridient ? item.ingridient : 'all'}`)} className='aboutMenu__card aboutMenu__card-map' >
                            <img className='aboutMenu__card-img aboutMenu__card-img-map' src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt="" />
                            <h2 className='aboutMenu__card-title aboutMenu__card-title-map'>{item.title}</h2>
                        </div>
                    ))
                }
               

                <div className='aboutMenu__card' onClick={()=> navigate(`/catalog/sales/all`)}>
                            <img className='aboutMenu__card-img aboutMenu__card-img-map' src={Sales} alt="" />
                            <h2 className='aboutMenu__card-title'>Акции</h2>
                </div> 

                <div className='aboutMenu__card aboutMenu__card-map'>
                    <img className='aboutMenu__card-img aboutMenu__card-img-map' src={Ell} alt="" />
                    <h2 className='aboutMenu__card-title'>С угрем</h2> 
                </div>

                <div className='aboutMenu__card' onClick={()=> navigate(`/catalog/chicken`)}>
                    <div>
                        <img className='aboutMenu__card-img' src={Chicken} alt="" />
                        <h2 className='aboutMenu__card-title'>Чикен</h2>
                    </div>
                </div> 

                <div className='aboutMenu__card aboutMenu__card-pizza' onClick={()=> navigate(`/catalog/pizza/all`)}>
                        <img className='aboutMenu__card-img aboutMenu__card-img-pizza' src={Pizza} alt="" />
                        <h2 className='aboutMenu__card-title'>Пицца</h2>
                </div>

               

               

                


                  
            </div> 

        </div>
    );
};

export default AboutMenu;