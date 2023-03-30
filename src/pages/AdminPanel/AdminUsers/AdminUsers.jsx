import React, {useState} from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from '../../../redux/reducers/usersApi';

const AdminUsers = () => {

    const [countUsers, setCountUsers] = useState('');
    const {data = [], isLoading} = useGetUsersQuery(countUsers);

    const [deleteUser] = useDeleteUserMutation();
    
    const handleDeleteUser = async (id) => {
        await deleteUser(id).unwrap();
    }
    
    if(isLoading) return <h1>Loading...</h1>

    return (
        <div className='adminPanel__users'>
             <div className='adminPanel__users-top'>
                    <select className='adminPanel__users-selector' value={countUsers} onChange={(e)=> setCountUsers(e.target.value)}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                    </select>
                </div>
                <ul className='adminPanel__user-list'>
                    {
                        data.map(item => (
                            <li className='adminPanel__user-item' key={item.id} style={{borderBottom: '1px solid black'}}>
                                <p className='adminPanel__user-id'>{item.id}</p>
                                <p className='adminPanel__user-login'>{item.login}</p>
                                <p className='adminPanel__user-email'>{item.email}</p> 
                                <p className='adminPanel__user-phone'>{item.phone}</p> 
                                <button onClick={()=> handleDeleteUser(item.id)} className='adminPanel__user-delete btn' type='button'>Delete</button>  
                            </li>
                        ))
                    }
                </ul>  
        </div>
    );
};

export default AdminUsers;