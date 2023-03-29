import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (filter, {rejectWithValue})=>{
        try {

            const selectOrder = () =>{
                switch (filter.order) {
                    case 'asc': {
                        return `_sort=price&_order=asc&`
                    }
                    case 'desc': {
                        return `_sort=price&_order=desc&`
                    }
                    case 'abc': {
                        return `_sort=title&_order=asc&`
                    }
                    case 'weight': {
                        return `_sort=weight&_order=asc&`
                    }
                    case 'calories': {
                        return `_sort=calories&_order=asc&`
                    }
                    case 'default':{
                        return ''
                    }   
                }
            }
            const order = selectOrder();
            const category = `${filter.category !== 'all' ? `category=${filter.category}&` : '' }`;

            const res = await axios(`/products?${category}${order}`)
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
        order: '',
        title: '',
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