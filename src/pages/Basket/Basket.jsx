import React, { useContext } from 'react';
import BasketZero from '../../Components/BasketZero/BasketZero';
import { CustomContext } from '../../utils/Context';

const Basket = () => {

    const {basket, setBasket} = useContext(CustomContext);


    if(basket.length === 0) {
        return <BasketZero/>
    }

   

    return (
        <div className='basket'>
            <div className="container">
               
            </div>
            
        </div>
    );
};

export default Basket;