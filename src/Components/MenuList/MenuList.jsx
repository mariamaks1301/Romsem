import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../utils/axios';





const MenuList = () => {
     const navigate = useNavigate();
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios(`/menu`)
        .then(({data})=> {setMenu(data)})
        .catch((err)=>console.log(err))
    },[])

    return (
        <div className='menu'>
            <div className="menu__content">
                <ul className='menu__list'>
                    {
                        menu.map((item)=>(
                            <li key={item.id} className='menu__item' onClick={()=> navigate(`/catalog?category=${item.name}`)}>
                                <img className='menu__item-img' src={item.image} alt={item.title} />
                                <Link  className='menu__item-link'>{item.title}</Link>
                             </li>
                        ))
                    }

                </ul>               
             </div>           
        </div>
    );
};

export default MenuList;