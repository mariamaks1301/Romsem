import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: (limit = '10') => `/products?${limit && `_limit=${limit}`}`,
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({ type: 'Products', id})),
                    { type: 'Products', id: 'LIST' },
                ]
                : [{ type: 'Products', id: 'LIST'}],
        }),
        getProduct: build.query({
            query: id => `/posts/${id}`
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'products', 
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST'}]
        }),
        editProduct: build.mutation({
            query: ({ id, ...patch }) => ({
              url: `/products/${id}`,
              method: 'PATCH',
              body: patch,
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST'}]
          })
    })
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation, useGetProductQuery, useEditProductMutation  } = productsApi;