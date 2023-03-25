import React, { useContext, useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import Card from '../../Components/Card/Card';


const Catalog = () => {

    const navigate = useNavigate();
    const {products, setProducts} = useContext(CustomContext);

    useEffect(()=>{   
        axios(`/products`)
        .then(({data})=> setProducts(data))
        .catch((err)=> console.log(err.message))
    }, [])

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__aside"></div>

                    <div className="catalog__row">
                        <h2 className='catalog__title'>Catalog Title</h2>
                        {
                            products.map(item => (

                                <Card key={item.id} item={item}/>

                                
                            ))
                        }

                    </div>

                </div>
                
              

                
            </div>
        </section>
    );
};

export default Catalog;