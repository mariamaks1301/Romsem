import React, { useState } from 'react';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminProducts from './AdminProducs/AdminProducts';



const AdminPanel = () => {

     const [status, setStatus] = useState(false);
    
    return (
        <div className='adminPanel'>
            <div className="container">
                <div className='adminPanel__block-switcher'>
                    <button style={{background: status && '#F46D40'}} onClick={()=> setStatus(true)}  className='adminPanel__switcher btn' type='button'>Users</button>
                    <button style={{background: !status && '#F46D40'}} onClick={()=> setStatus(false)} className='adminPanel__switcher btn' type='button'>Products</button>   
                </div>

                    {
                        status && <AdminUsers/> 
                    }

                    {
                        !status && <AdminProducts/>
                    }

                    
                    
                    
                

                
                
               
            </div>
        </div>
    );
};

export default AdminPanel;