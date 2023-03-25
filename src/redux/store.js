import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { productsApi } from "./productsApi";
import { basketApi } from "./basketApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [basketApi.reducerPath]: basketApi.reducer,

    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(usersApi.middleware),
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsApi.middleware),
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(basketApi.middleware),


})