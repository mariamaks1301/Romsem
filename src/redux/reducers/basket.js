import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            "id": 1,
            "image": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "title": "Пепперони Фреш с перцем",
            "name": "pepperoni-pepper",
            "price": 803,
            "ingridients": "",
            "category": "pizza"
          },
          {
            "id": 2,
            "image": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "title": "Сырная",
            "name": "cheese",
            "price": 245,
            "ingridients": "",
            "category": "pizza"
          },
          {
            "id": 3,
            "image": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            "title": "Цыпленок барбекю",
            "name": "barbecue-chicken",
            "price": 295,
            "ingridients": "",
            "category": "pizza"
          }
    ],
 
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addItem: (state, action) => {
        state.basket = action.payload
      },
      minusItem(state, action) {
          state.basket = action.payload
      },
      removeItem(state, action) {
          state.basket = action.payload
      },

    }
})

export const {addItem, minusItem, removeItem} = basketSlice.actions
export default basketSlice.reducer