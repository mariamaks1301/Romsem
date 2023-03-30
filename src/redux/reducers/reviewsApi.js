import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    tagTypes: ['Reviews'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getReviews: build.query({
            query: ()=> `/reviews`,
            providesTags: (result) => result
            ? [
                ...result.map(({id}) => ({ type: 'Reviews', id})),
                { type: 'Reviews', id: 'LIST' },
            ]
            : [{ type: 'Reviews', id: 'LIST'}],
        }),
        addReview: build.mutation({
            query: (body) => ({
                url: '/reviews',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Reviews', id: 'LIST'}]
        }) 
    })
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewsApi;