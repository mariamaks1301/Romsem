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

            let titleFilter = `${filter.title.length !== 0 ? 'title_like=' + filter.title + '&' : ''}`
            
            const category = `${filter.category !== 'all' ? `category=${filter.category}&` : '' }`;

            const ingridient = `${filter.ingridient !== 'all' ? `ingridient=${filter.ingridient}&` : '' }`;

            const res = await axios(`/products?${category}${ingridient}${order}${titleFilter}`)
            if(res.statusText !== 'OK'){
                throw new Error('Произошла ошибка')
            }
            return res.data
            
        } catch (err) {
            return rejectWithValue(err.message)
            
        }

    }
)


  export const changeProduct = createAsyncThunk(
    "users/changeProduct",
    async (id, { rejectWithValue }) => {
      try {
        const res = await axios.put(`/products/${id}`, {});
        return res.data;
      } catch (err) {
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  );
  


const initialState = {
    data: [],
    filter: {
        category: 'all',
        ingridient: 'all',
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
        },
        changeOrder: (state, action) => {
            state.filter = {
                ...state.filter,
                order: action.payload,
            }
        },
        ingridientFilter: (state, action) => {
            state.filter = {
                ...state.filter,
                ingridient: action.payload,
            }
        },
        titleFilter: (state, action) => {
            state.filter = {
                ...state.filter,
                titleFilter: action.payload,
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

export const { changeStatus, changeOrder, ingridientFilter, titleFilter } = productsSlice.actions
export default productsSlice.reducer