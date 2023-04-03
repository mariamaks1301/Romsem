import React from 'react';

const DeliveryDone = ({done}) => {
    return (
        <div className='deliveryDone' style={{display: done ? 'flex' : 'none'}}>
            <div className="container">
                <h2 className='deliveryDone__title'>Ваш заказ успешно оформлен</h2>
                <p className='deliveryDone__text'>
                    Ожидайте доставку в течении 60 минут
                </p>

            </div> 
        </div>
    );
};

export default DeliveryDone;