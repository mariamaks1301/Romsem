import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { productsApi } from "./productsApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(usersApi.middleware),
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsApi.middleware),

})