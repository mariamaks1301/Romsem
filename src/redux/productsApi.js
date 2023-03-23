import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: (limit = '10') => `/products?${limit && `_limit=${limit}`}`,
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'products', 
                method: 'POST',
                body,
            })
        })
    })
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;