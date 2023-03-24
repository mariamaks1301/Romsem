import React, { useState } from 'react';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminProducts from './AdminProducs/AdminProducts';



const AdminPanel = () => {

     const [status, setStatus] = useState(false);
    
    return (
        <div className='adminPanel'>
            <div className="container">
                <div className='adminPanel__block-switcher'>
                    <button onClick={()=> setStatus(true)}  className='adminPanel__switcher btn' type='button'>Users</button>
                    <button onClick={()=> setStatus(false)} className='adminPanel__switcher btn' type='button'>Products</button>   
                </div>

                    {
                        status ? <AdminUsers/> :  <AdminProducts/>
                    }

                    
                    
                    
                

                
                
               
            </div>
        </div>
    );
};

export default AdminPanel;