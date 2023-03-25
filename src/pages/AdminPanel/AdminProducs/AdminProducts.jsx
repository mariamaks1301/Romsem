import React, {useState} from 'react';
import { useGetProductsQuery, useDeleteProductMutation, useGetProductQuery, useEditProductMutation  } from '../../../redux';
import AdminAddProduct from './AdminAddProduct';
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import ProductSearch from '../../../Components/ProductSearch/ProductSearch';



const AdminProducts = () => {

    const [countProducts, setCountProducts] = useState('');
    const {data = [], isLoading} = useGetProductsQuery(countProducts);
 

    const [deleteProduct] = useDeleteProductMutation();
    const handleDeleteProduct = async (id) => {
        await deleteProduct(id).unwrap();
    }


    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [ingridints, setIngridints] = useState('');
    const [compound, setCoumpound] = useState('');
    const [editProduct] = useEditProductMutation();


    

   const handleEditProduct = async ({id: title, price, ingridints, compound}) => {
        await editProduct({ id: title, price, ingridints, compound }).unwrap(); 
   }


    
    if(isLoading) return <h1>Loading...</h1>

    return (
        <div className='adminProducts'>

            <AdminAddProduct/>
                 
            <div>
                <div className='adminProducts__row'>
                <select className='adminProducts__select' value={countProducts} onChange={(e)=> setCountProducts(e.target.value)}>
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



                <ProductSearch/>

                </div>
                
                
                <ul className='adminProducts__list'>
                    {
                        data.map(item => (
                            <li key={item.id} className='adminProducts__item adminProducts__item-row'>
                                    <img className='adminProducts__item-img' src={item.image} alt={item.title} />
                                
                                    <div className='adminProducts__item-info'>
                                        <p className='adminProducts__item-category'>Категория: {item.category}</p>
                                        <p className='adminProducts__item-category'>
                                            {item.categories && `Податегория: ${item.categories}`}
                                        </p>

                                        {
                                            active ? <input className='adminProducts__item-title adminProducts__item-title-field' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Измените название'/>
                                            : <p className='adminProducts__item-title'>Название: {item.title}</p>
                                        }

                                       {
                                            active ? <input className='adminProducts__item-price adminProducts__item-price-field' type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Цена'/>
                                            : <p className='adminProducts__item-price'>Цена: {item.price} Сом</p>
                                        }
                                        
                                         <p className='adminProducts__item-weight'>
                                            {item.weight && `Вес: ${item.weight} гр`}
                                         </p>

                                         {
                                            active ? <input className='adminProducts__item-ingridints adminProducts__item-ingridints-field' type="text" value={ingridints} onChange={(e)=>setIngridints(e.target.value)} placeholder='Введите ингридиенты ч/з запятую'/>
                                            : <p className='adminProducts__item-ingridints'>
                                                {item.ingridints && `Ингридиенты: ${item.ingridints}`}
                                              </p>
                                        }
                                        
                                        {
                                            active ? <input className='adminProducts__item-compound adminProducts__item-compound-field' type="text" value={compound} onChange={(e)=>setCoumpound(e.target.value)} placeholder='Состав сета ч/з запятую'/>
                                            : <p className='adminProducts__item-ingridints'>
                                                {item.compound && `Состав сета: ${item.compound}`}
                                              </p>
                                        }
                                         
                                         <p className='adminProducts__item-quantity'>
                                            {item.quantity && `Кол кусочков: ${item.quantity}`}
                                         </p>
                                    </div>

                                    <div className="adminProducts__btns">
                                        {
                                            active ? <button className='adminProducts__item-btn btn' onClick={()=>{
                                                handleEditProduct(item.id, item.title, item.price, item.ingridints, item.compound)
                                                setActive(!active)
                                            }}><FaPencilAlt style={{fill: 'white', fontSize: '18px'}}/></button>
                                            : <button onClick={()=> setActive(!active)} className='adminProducts__item-btn btn' type='button'>
                                            <FaPencilAlt style={{fill: 'white', fontSize: '18px'}}/>
                                        </button>
                                        }
                                       
                                        <button onClick={()=> handleDeleteProduct(item.id)} className='adminProducts__item-btn btn' type='button'>
                                            <FaTrashAlt fill='white' fontSize={'18px'}/>
                                        </button>
                                    </div>
                                
                            </li>
                        ))
                    }
                
                </ul>
            </div>
            

            

            
        </div>
    );
};

export default AdminProducts;