import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) =>{
        try {

            const res = await axios(`/users`)
            if(res.status !== 'OK'){
                throw new Error('Произошла ошибка')
            }
            return res.data
            
        } catch (err) {
            return rejectWithValue(err.message);
            
        }

    }
)



const initialState = {
    user: {
        email : ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        fillUser : (state, action) => {
            state.user = action.payload
        },
        logOutUser : (state, action) => {
            state.user = {email : ''}
        },
        deleteUser: (state, action) => {
            state.user = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUsers.rejected] : (state, action)=>{
            state.error = action.payload
            state.status = 'error'
        },
        [getUsers.pending] : (state, action) =>{
            state.status = 'loading'
        },
        [getUsers.fulfilled] : (state, action) =>{
            state.status = 'done'
            state.data = action.payload
        }
    }

})

export const {fillUser, logOutUser} = userSlice.actions
export default userSlice.reducer