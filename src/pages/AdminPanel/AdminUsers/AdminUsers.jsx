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
                        <option value="''">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
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