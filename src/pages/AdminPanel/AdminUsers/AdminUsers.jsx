import React, {useState} from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from '../../../redux';

const AdminUsers = () => {

    const [countUsers, setCountUsers] = useState('');
    const {data = [], isLoading} = useGetUsersQuery(countUsers);

    const [deleteUser] = useDeleteUserMutation();
    
    const handleDeleteUser = async (id) => {
        await deleteUser(id).unwrap();
    }
    
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div className='users'>
             <div>
                    <select value={countUsers} onChange={(e)=> setCountUsers(e.target.value)}>
                        <option value="''">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>


                    </select>
                </div>
                <ul className='adminPanel__list'>
                    {
                        data.map(item => (
                            <li className='adminPanel__item' key={item.id} style={{borderBottom: '1px solid black'}}>
                                <p className='adminPanel__item-id'>{item.id}</p>
                                <p className='adminPanel__item-login'>{item.login}</p>
                                <p className='adminPanel__item-email'>{item.email}</p>
                                <p className='adminPanel__item-phone'>{item.phone}</p>
                                <p className='adminPanel__item-address'>{item.address}</p>
                                <button onClick={()=> handleDeleteUser(item.id)} className='adminPanel__item-delete btn' type='button'>Delete</button>  
                            </li>
                        ))
                    }
                </ul>
            
        </div>
    );
};

export default AdminUsers;