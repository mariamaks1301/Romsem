import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../utils/axios';
import menuData from '../../utils/menuData';





const MenuList = () => {
     const navigate = useNavigate();
   

    return (
        <div className='menu'>

            <div className="container">
                <div className="menu__content">
                    <ul className='menu__list'>
                        {
                            menuData.map((item)=>(
                                <li key={item.category}  className='menu__item' onClick={()=> navigate(`/catalog/category/${item.ingridient ? item.ingridient : 'all'}`)}>
                                    <img className='menu__item-img' src={item.image} alt={item.category} />
                                    <img className='menu__item-icon' src={item.icon} alt='icon' />
                                    <Link  className='menu__item-link'>{item.ru}</Link>
                                 </li>
                            ))
                        }
                    </ul>
                 </div>
            </div>
        </div>
    );
};

export default MenuList;