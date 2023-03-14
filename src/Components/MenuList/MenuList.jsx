import React from 'react';
import { useNavigate, Link } from 'react-router-dom';





const MenuList = () => {
    const navigate = useNavigate();

    return (
        <div className='menu'>
            <div className="menu__content">
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <img className='menu__item-img' src="https://wasabi.kg/wp-content/uploads/2021/09/klassika.jpg" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li>
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                    <li className='menu__item'>
                        <img className='menu__item-img' src="" alt="" />
                        <Link className='menu__item-link'>Пицца</Link>
                    </li> 
                   

                </ul>               
             </div>           
        </div>
    );
};

export default MenuList;