import React, {useState} from 'react';
import { useGetProductsQuery, useAddProductMutation } from '../../../redux';
import AdminAddProduct from './AdminAddProduct';

const AdminProducts = () => {

    const [countProducts, setCountProducts] = useState('');
    const {data = [], isLoading} = useGetProductsQuery(countProducts);
    const [pageNewProduct, setPageNewProduct] = useState(false);


    
    if(isLoading) return <h1>Loading...</h1>

    return (
        <div className='adminProducts'>

            {
                pageNewProduct ?  <AdminAddProduct pageNewProduct={pageNewProduct} setPageNewProduct={setPageNewProduct} /> 
                : <div>
                <select value={countProducts} onChange={(e)=> setCountProducts(e.target.value)}>
                    <option value="''">All</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                    <option value="80">80</option>
                    <option value="90">90</option>
                    <option value="100">100</option>
                </select>
                
                <ul className='adminProducts__list'>
                    {
                        data.map(item => (
                            <li key={item.id} className='adminProducts__item adminProducts__item-row'>
                                <img className='adminProducts__item-img' src={item.image} alt={item.title} />
                                <div className='adminProducts__item-info'>
                                    <p className='adminProducts__item-id'>{item.id}</p>
                                    <p className='adminProducts__item-category'>{item.category}</p>
                                    <p className='adminProducts__item-title'>{item.title}</p>
                                     <p className='adminProducts__item-name'>{item.name}</p>
                                    {/* <p className='adminProducts__item-price'>{item.price}</p> */}
                                    {/* <p className='adminProducts__item-weight'>{item.weight}</p> */}
                                    {/* <p className='adminProducts__item-ingridints'>{item.ingridints}</p> */}
                                    {/* <p className='adminProducts__item-quantity'>{item.quantity}</p> */}
                                    <button className='adminProducts__item-btn btn' type='button'>Change</button>
                                    <button className='adminProducts__item-btn btn' type='button'>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                
                </ul>
            </div>
            }

            

            
        </div>
    );
};

export default AdminProducts;