import React, { useState } from 'react';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminProducts from './AdminProducs/AdminProducts';
import AdminAddProduct from './AdminProducs/AdminAddProduct';


const AdminPanel = () => {

    // const [status, setStatus] = useState('users');
    


    return (
        <div className='adminPanel'>
            <div className="container">
                <div className='adminPanel__block-switcher'>
                    <button  className='adminPanel__switcher btn' type='button'>Users</button>
                    <button  className='adminPanel__switcher btn' type='button'>Products</button>
                    <button  className='adminPanel__switcher btn' type='button'>Add Product</button>
                </div>

                    <AdminUsers/> 
                    <AdminAddProduct/>
                    <AdminProducts/> 
                

                
                
               
            </div>
        </div>
    );
};

export default AdminPanel;