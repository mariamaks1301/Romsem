import React, {  useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, changeStatus } from '../../redux/reducers/products';
import { productsSelector } from '../../redux/reselect';
import CategorySelect from './CategorySelect/CategorySelect';
import OrderSelect from './OrderSelect/OrderSelect';
import IngridientSelect from './IngridientSelect/IngridientSelect';





const Catalog = () => {
   

    const [ingridient, setIngridint] = useState('all');
    const {category} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

 

    const {data, filter, status, error}  = useSelector(productsSelector);



    useEffect(()=>{
            dispatch(getAllProducts(filter));
    }, [filter])



    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__content-row">
                        <h2 className='cotalog__crumbs catalog__title'>
                            <Link className='catalog__crumbs-link ' to='/'>Главная</Link> / {category}
                        </h2>
                        <div className="catalog__filter">
                            <CategorySelect/>
                            <OrderSelect/>
                            <IngridientSelect ingridient={ingridient} setIngridint={setIngridint}/>

                        </div>
                        
                    </div>

                    <div className="catalog__row">
                        
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