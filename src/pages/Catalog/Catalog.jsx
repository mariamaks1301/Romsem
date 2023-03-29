import React, {  useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/reducers/products';
import { productsSelector } from '../../redux/reselect';
import CategorySelect from './CategorySelect/CategorySelect';
import OrderSelect from './OrderSelect/OrderSelect';




const Catalog = () => {
    const [order, setOrder] = useState('default');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {category} = useParams();
 

    const {data, filter, status, error}  = useSelector(productsSelector);



    useEffect(()=>{
            dispatch(getAllProducts(filter));
    }, [filter])



    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__aside">

                        <CategorySelect filter={filter}/>
                        <OrderSelect order={order} setOrder={setOrder}/>
              
                    </div>

                    <div className="catalog__row">
                        <h2 className='cotalog__crumbs catalog__title'>
                            <Link className='catalog__crumbs-link ' to='/'>Главная</Link> / {category} {
                                
                            }
                        </h2>
                        {
                            status === 'loading' ? <h2>...Loading</h2> : status === 'error' ? <h2>{error}</h2> :
                            data.map(item => (

                                <Card key={item.id} item={item} filter={filter} dispatch={dispatch} />

                                
                            ))
                        }

                    </div>

                </div>
                
              

                
            </div>
        </section>
    );
};

export default Catalog;