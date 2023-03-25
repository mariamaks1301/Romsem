import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ProductSearch = () => {
    return (
        <div className='product__search'>
            <label className='product__search-label' htmlFor="search-field">
                <input id='search-field' className='product__search-field' type="text" placeholder='Найти продукт по названию' />  
                <span className='product__search-icon'>
                    <BsSearch/>
                </span>
            </label>
            
        </div>
    );
};

export default ProductSearch;