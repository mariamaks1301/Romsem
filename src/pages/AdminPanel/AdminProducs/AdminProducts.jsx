import React, {useState} from 'react';
import { useGetProductsQuery } from '../../../redux/reducers/productsApi';
import AdminAddProduct from './AdminAddProduct';
import ProductSearch from '../../../Components/ProductSearch/ProductSearch';
import ProductItem from './ProductItem';



const AdminProducts = () => {


    const [category, setCategory] = useState('');
    const {data = [], isLoading} = useGetProductsQuery({category});
    
    if(isLoading) return <h1>Loading...</h1>

    return (
        <div className='adminProducts'>

            <AdminAddProduct/>
                 
            <div>
                <div className='adminProducts__row'>

                <select className='adminProducts__select' value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="pizza">Пицца</option>
                    <option value="rolls">Ролы</option>
                    <option value="sushi">Суши</option>
                    <option value="sets">Сеты</option>
                    <option value="soup">Супы</option>
                    <option value="wok">WOK</option>
                    <option value="salads">Салаты</option>
                    <option value="drinks">Напитки</option>
                </select>



                <ProductSearch/>

                </div>
                
                
                <ul className='adminProducts__list'>
                    {
                        data.map(item => (

                            <ProductItem key={item.id} item={item}/>

                        ))
                    }
                
                </ul>
            </div>
            

            

            
        </div>
    );
};

export default AdminProducts;