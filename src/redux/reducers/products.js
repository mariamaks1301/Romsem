import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    data: [],
     filter: {
         category: '',
         ingridients: '',
         orders: ''
     },
     error: '',
     status: ''
 };
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.filter = {
                ...state.filter,
                category: action.payload
            }
         }

     }

})

 export const {changeStatus} = productSlice.actions
 export default productSlice.reducer