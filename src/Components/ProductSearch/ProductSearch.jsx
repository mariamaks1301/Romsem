import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
// import {useGetProductsQuery} from '../../redux/reducers/productsApi';

const ProductSearch = () => {

    const [title, setTitle] = useState('');
    // const {} = useGetProductsQuery({title});
    // const handleChange = (e)=>{
        
    // }

    return (
        <div className='product__search'>
            <label className='product__search-label' htmlFor="search-field">
                <input value={title} onChange={(e)=> setTitle(e.target.value)} id='search-field' className='product__search-field' type="text" placeholder='Найти продукт по названию' />  
                <span className='product__search-icon'>
                    <BsSearch/>
                </span>
            </label>
            
        </div>
    );
};

export default ProductSearch;