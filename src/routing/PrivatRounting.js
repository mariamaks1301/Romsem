import React from 'react';
import { Route , Routes} from 'react-router-dom';
import Layout from '../Layout/Layout';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Catalog from '../pages/Catalog/Catalog';
import Delivery from '../pages/Delivery/Delivery';
import Product from '../pages/Product/Product';
import Home from '../pages/Home/Home';
import Basket from '../pages/Basket/Basket';
import NotFound from '../pages/NotFound/NotFound';

const PrivatRounting = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog/:category' element={<Catalog/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>

                <Route path="/delivery" element={<Delivery/>}/>
            <Route path='adminpanel' element={<AdminPanel/>}/>
        </Routes>
    );
};

export default PrivatRounting;