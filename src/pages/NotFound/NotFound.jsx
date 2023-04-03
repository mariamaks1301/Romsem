import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='notFound'>
            <div className="container">
                <button onClick={()=> navigate('/')} className='delivery__path-btn'>Вернуться на главную страницу</button>
                <h2 className='notFound__title'>Страница не найдена</h2>
                <img className='notFound__img' src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;