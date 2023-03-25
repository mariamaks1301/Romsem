import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const basketApi = createApi({
    reducerPath: 'basketApi',
    tagTypes: ['Basket'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getBasketProducts: build.query({
            query: () => '/basket',
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({ type: 'Basket', id})),
                    { type: 'Basket', id: 'LIST' },
                ]
                : [{ type: 'Basket', id: 'LIST'}],
        }),
        addBasketProduct: build.mutation({
            query: (body) => ({
                url: 'basket',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Basket', id: 'LIST'}]
        }),
        deleteBasketProduct: build.mutation({
            query: (id) => ({
                url: `/basket/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Basket', id: 'LIST'}]
        }),
    })
});

export const { useGetBasketProductsQuery, useAddBasketProductMutation, useDeleteBasketProductMutation } = basketApi;
