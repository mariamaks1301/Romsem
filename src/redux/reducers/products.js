import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (filter, {rejectWithValue})=>{
        try {

            const category = `${filter.category !== 'all' ? `category=${filter.category}&` : '' }`;

            const res = await axios(`/products?${category}`)
            if(res.statusText !== 'OK'){
                throw new Error('Произошла ошибка')
            }
            return res.data
            
        } catch (err) {
            return rejectWithValue(err.message)
            
        }

    }
)

const initialState = {
    data: [],
    filter: {
        category: 'all',
        orders: ''
    },
    error: '',
    status: ''

}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeStatus: (state, action)=> {
            state.filter = {
                ...state.filter, 
                category: action.payload,
            }
        }
    },
    extraReducers: {
        [getAllProducts.rejected] : (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getAllProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getAllProducts.fulfilled] : (state, action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }
})

export const { changeStatus } = productsSlice.actions
export default productsSlice.reducer