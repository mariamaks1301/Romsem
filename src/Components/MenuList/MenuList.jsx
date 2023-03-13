import React from 'react';
import menuData from "../../utils/menuData";


const MenuList = () => {
    const navigate = useNavigate();

    return (
        <aside className='menu__list'>
            {
                menuData.map((item)=>(
                    <li key={item.en} className='menu__item' onClick={()=> navigate(`/cotalog/${item.en}`)}>
                        {item.ru}
                    </li>
                ))
            }
            
        </aside>
    );
};

export default MenuList;