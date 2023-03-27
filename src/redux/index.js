
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import user from './reducers/user';
import products from "./reducers/products";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import {usersApi} from "./reducers/usersApi";
import { productsApi } from "./reducers/productsApi";

const rootReducer = combineReducers({
    user,
    products,
})

const persistConfig = {
    key: 'root',
    storage,

}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        [usersApi.reducerPath] : usersApi.reducer,
        [productsApi.reducerPath] : productsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(usersApi.middleware).concat(productsApi.middleware)
})

export const persistor = persistStore(store)
export default store



