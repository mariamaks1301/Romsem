import React from 'react';
import {Route, Routes} from "react-router-dom";
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Delivery from '../pages/Delivery/Delivery';
import Basket from '../pages/Basket/Basket';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Product from '../pages/Product/Product';
import Reviews from '../pages/Reviews/Reviews';
import Layout from '../Layout/Layout';

const AuthRouting = () => {
    return (
        
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog/:category/:ingridient' element={<Catalog/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Route> 
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path='/adminpanel' element={<AdminPanel/>}/>
        </Routes>
    );
};

export default AuthRouting;